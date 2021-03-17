import { DropDown, DropDownItem, SearchStyles, SearchInput } from './styles/DropDown'

export default function Search() {
    return (
        <SearchStyles>
            <div>
                <SearchInput type="search" placeholder="Search..." />
            </div>
        </SearchStyles>
    )
}