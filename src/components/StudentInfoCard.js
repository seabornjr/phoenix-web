import React from 'react'
import { Card, Image} from 'react-bootstrap'


const studentName = 'Tyler';

function StudentInfoCard() {
  return (
    <div className='student-card'>
      <Card> 
        <h2>Student Info</h2>
        <div className='name-and-pic'> 
            <Image src={require('../assets/userAvatar1.png')} width={100} height={100} /> 
            <h3>{studentName}</h3>
        </div>
      </Card>
    </div>
  )
}

export default StudentInfoCard
