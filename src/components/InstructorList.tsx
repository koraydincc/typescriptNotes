import React from 'react'

type instructorListType = {
    instructorNameLastNameList:{
        firstName:string,
        lastName:string
    }[]
}

function InstructorList(props:instructorListType) {
  return (
    <div>
        {props.instructorNameLastNameList.map(item => {
            return (
                <h3 key={item.firstName}>{item.firstName} {item.lastName}</h3>
            )
        })}
    </div>
  )
}

export default InstructorList
