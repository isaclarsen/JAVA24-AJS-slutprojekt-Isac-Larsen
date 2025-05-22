import { FilterOptions } from "./FilterOptions";
import { SortOptions } from "./SortOptions";

export function FilterSort({members, categories}){
    return(
        <div id="filterSortContainer">
            <h3>FILTER & SORT</h3>
            <FilterOptions members={members} categories={categories}/>
            <SortOptions/>
        </div>
    )
}