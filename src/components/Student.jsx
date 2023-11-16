import { useState } from "react";

const Student = ({name,age,course}) => {
  return (
    <>
        <h1>{name} is {age} and enrolled in {course}</h1>
    </>
  )
}

export default Student;