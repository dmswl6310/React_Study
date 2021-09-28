// import InsertArea from "./InsertArea"
// import ListArea from "./ListArea"

import { useState } from "react"

function MainArea(){
  
    const [toDos, setTodos] = useState([ //리스트생성
      {id : 1 , list : '오늘의 할일'}
    ]);
  
    const[inputList, setInputList] = useState('') //초기값
    const[nextId, setNextId] = useState(2) //다음 id 값
  
    const onChange  = (e : any) => {
      setInputList(e.target.value)
      console.log(e.target.value)
    }
    
    const onClick = () =>{
      const nexttoDos = toDos.concat(
       { 
         id : nextId,
        list : inputList
       }
      );
      console.log(inputList)
      setNextId(nextId +1)
      setTodos(nexttoDos)
      setInputList('');
      
    }
    
    const onDelete = (id : number) => {
      const nexttoDos = toDos.filter(toDo => toDo.id !== id)
      setTodos(nexttoDos)
    }

    //리스트 표기
    const viewerList = toDos.map(toDo => 
      <li key = {toDo.id}>{toDo.list}<button onClick ={()=> onDelete(toDo.id)}>삭제</button></li>
      )
    
    return(
        <div>
          <input value = {inputList} onChange={onChange}></input>
          <button onClick ={onClick}>+</button>
          <ul>{viewerList}</ul>



          {/* <InsertArea></InsertArea>
          <ListArea></ListArea> */}
        </div>
    )
}

export default MainArea