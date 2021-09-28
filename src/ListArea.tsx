import { useState } from "react"

const ListArea = () =>{
    
    const[toDos, setToDos] = useState([
        {id: 1 , text : "일정을 추가하세요"}
    ])
    
    const[inputText,setInputText] = useState("");
    const[nextId, setNextId] = useState("2")
    

    const toDoList = toDos.map((todo,index) => <li  key={todo.id}>{todo.text}  <button>-</button></li>)
    return <ul>{toDoList}</ul>
}

export default ListArea;