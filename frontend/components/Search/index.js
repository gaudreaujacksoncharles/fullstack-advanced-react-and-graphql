import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { SearchStyles, SearchInputWrapper, SearchInput, DropDown, DropDownItem, ItemImage, ItemName  } from './styles'

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [dropDownVisibility, setDropDownVisibility] = useState(false)
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 1);
  resetIdCounter();
  function handleClick(id) {
    console.log(id)
    router.push({
        pathname: `/product/${id}`
    })
    setDropDownVisibility(false)
}
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
        setDropDownVisibility(true)
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
      setDropDownVisibility(false)
    },
    itemToString: (item) => item?.name || '',
  });
  return (
    <SearchStyles>
      <SearchInputWrapper {...getComboboxProps()}>
        <SearchInput
          {...getInputProps({
            type: 'text',
            placeholder: 'Search for an Item',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </SearchInputWrapper>
        {
            inputValue && dropDownVisibility === true ? (
                <DropDown {...getMenuProps()}>
                    {isOpen &&
                    items.map((item, index) => (
                        <DropDownItem
                            {...getItemProps({ item })}
                            key={item.id}
                            highlighted={index === highlightedIndex}
                            onClick={() => handleClick(item.id)}
                        >
                        <ItemImage src={item.photo.image.publicUrlTransformed} alt={item.name} width="50"/>
                        <ItemName>{item.name}</ItemName>
                        </DropDownItem>
                    ))}
                    {isOpen && !items.length && !loading && (
                    <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
                    )}
                </DropDown>
            ):null
        }
    </SearchStyles>
  );
}