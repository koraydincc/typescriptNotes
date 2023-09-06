import React from 'react'


type instructorProps={
    instructorNameLastName:{
        firstName: String,
        lastName: String
    }
}

function Instructor(props: instructorProps) {
  return (
    <div>
      {props.instructorNameLastName.firstName} {''} {props.instructorNameLastName.lastName}
    </div>
  )
}

export default Instructor
