import Student from "./Student"


const StudentList = ({data}) => {
  return (
    <>
    {data.map((x,i)=>{
            return(
                <Student key={i} name={x.name} age={x.age} course={x.course}/>
            )
        })}
        </>
  )
}

export default StudentList