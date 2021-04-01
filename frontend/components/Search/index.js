import { SearchStyles, SearchInput } from './styles'

export default function Search() {
    return (
        <SearchStyles>
            <div>
                <SearchInput type="search" placeholder="Search for items..." />
            </div>
        </SearchStyles>
    )
}