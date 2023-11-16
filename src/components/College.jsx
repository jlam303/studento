import data2 from "../data"
import StudentList from "./StudentList"
import { useState } from "react"
const College = () => {
    const [data,setData] =useState(data2)
    const updateData =()=>{
        let newPerson= {
            age: document.getElementById("age").value, name: document.getElementById("name").value, course: document.getElementById("course").value
        }
        setData([newPerson,...data])
        document.getElementById("name").value=""
        document.getElementById("course").value=""
        document.getElementById("age").value=""
        
    }
    return(
        <>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" />
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" />
            <button type="button" onClick={()=>{updateData()}}>Update</button>
        </form>
        <StudentList data={data}/>
        
        </>
    )
}

export default College