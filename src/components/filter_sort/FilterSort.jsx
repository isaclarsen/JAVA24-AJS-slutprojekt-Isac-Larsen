import { useState } from "react";
import { FilterOptions } from "./FilterOptions";
import { SortOptions } from "./SortOptions";

export function FilterSort({members, categories, selectedMember, setSelectedMember, selectedCategory, setSelectedCategory, sortBy, setSortBy, sortDirection, setSortDirection}){

    return(
        <div id="filterSortContainer">
            <h2>FILTER & SORT</h2>
            <FilterOptions
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            members={members}
            categories={categories}
            />
            <SortOptions
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
            />
        </div>
    )
}