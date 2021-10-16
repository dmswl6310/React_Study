import { useState } from "react";
import { TodoCreator } from "../TodoCreator";
import { TodoList } from "../TodoList";

const todoList: Todo[] = [
    {no: 1, text: 'Todo Item1', checked: true},
    {no: 2, text: 'Todo Item2', checked: false},
    {no: 3, text: 'Todo Item3', checked: true},
];

const MainComponent = () => {
    const [todoItemList, setTodoItemList] = useState<Todo[]>(todoList);
    const [no, setNo] = useState<number>(4);
    
    return (
        <div>
            <TodoCreator todoItemList={todoItemList} setTodoItemList={setTodoItemList} no={no} setNo={setNo}/>
            <TodoList todoItemList={todoItemList} setTodoItemList={setTodoItemList}/>
        </div>
    );
};

export default MainComponent;