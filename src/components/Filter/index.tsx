import { useEffect, useState } from "react";
import { UserProps } from "../../types/user";

import { FilterClearButton, FilterContainer, FilterInput, FilterLabel } from "./Filter.styles";

type FilterProps = {
  currentUsers: UserProps[] | [],
  setFilteredUsers: (filteredUsers: UserProps[]) => void
}

export default function Filter({ currentUsers, setFilteredUsers }: FilterProps) {
  const [searchWord, setSearchWord] = useState("")

  const getFilteredProfile = () => {
    const filteredUsers = currentUsers?.filter((user: UserProps) => {
      return searchWord?.toLowerCase() === "" 
        ? user 
        : user.name.toLowerCase().includes(searchWord)
    })

    setFilteredUsers(filteredUsers)
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value)
    const filteredUsers = currentUsers?.filter((user: UserProps) => {
      return event.target.value?.toLowerCase() === "" 
        ? user 
        : user.name.toLowerCase().includes(event.target.value)
    })

    setFilteredUsers(filteredUsers)
  }
  
  const clearFilter = () => {
    setSearchWord("")
  }

  useEffect(() => {
    getFilteredProfile()
  }, [currentUsers, searchWord])
  
  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Filtro:</FilterLabel>
      <FilterInput
        id="filter"
        type="text" 
        name="filter"
        value={searchWord}
        onChange={handleFilter}
      />
      { 
        searchWord != "" 
          ? <FilterClearButton size="35" onClick={clearFilter}/> 
          : <FilterClearButton size="35" color="#FFF"/>
      }
    </FilterContainer>
  )
}