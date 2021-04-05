import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
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
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 1);
  resetIdCounter();
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
            inputValue ? (
                <DropDown {...getMenuProps()}>
                    {isOpen &&
                    items.map((item, index) => (
                        <DropDownItem
                        {...getItemProps({ item })}
                        key={item.id}
                        highlighted={index === highlightedIndex}
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