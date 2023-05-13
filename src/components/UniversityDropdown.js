import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function UniversityDropdown() {

    const universities = ["Tulane", "Duke", "West Point"]


  return (
    <DropdownButton id="dropdown-basic-button" title="Select a University">
        { universities.map(university => <Dropdown.Item href="#/action-1" key={university} >{university}</Dropdown.Item> )}
    </DropdownButton>
  )
}

export default UniversityDropdown
