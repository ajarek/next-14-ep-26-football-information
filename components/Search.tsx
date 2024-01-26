'use client'
import { Input } from '@/components/ui/input'
import {  useState } from 'react';



const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  

  return (
    <div>
     
        <Input
          placeholder='Search'
          value={searchValue}
          onChange={handleSearchInputChange}
        />
    
    </div>
  )
}

export default Search
