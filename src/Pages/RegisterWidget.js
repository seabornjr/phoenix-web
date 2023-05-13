import React from 'react'
import { Card } from 'react-bootstrap'
import UniversityDropdown from '../components/UniversityDropdown'
import NextButton from '../components/NextButton'

function RegisterWidget() {
  return (
    <div className='register-wiget-page'>
      <Card className='widget-card'> 
        <Card.Header> For Which University do you handle admissions? </Card.Header>
        <Card.Body>
            <UniversityDropdown />
        </Card.Body>
      </Card>
      <NextButton />
    </div>
  )
}

export default RegisterWidget
