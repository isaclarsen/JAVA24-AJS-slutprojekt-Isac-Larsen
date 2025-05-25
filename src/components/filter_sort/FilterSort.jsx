import { FilterOptions } from "./FilterOptions";
import { SortOptions } from "./SortOptions";

export function FilterSort({members, categories}){
    return(
        <div id="filterSortContainer">
            <h2>FILTER & SORT</h2>
            <FilterOptions members={members} categories={categories}/>
            <SortOptions/>
        </div>
    )
}