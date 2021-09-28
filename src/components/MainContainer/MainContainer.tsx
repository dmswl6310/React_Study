import { useState } from "react";
import { TodoCreator } from "../TodoCreator";
import { TodoList } from "../TodoList";

const todoList: Todo[] = [
    {index: 1, text: 'Todo Item1', checked: true},
    {index: 2, text: 'Todo Item2', checked: false},
    {index: 3, text: 'Todo Item3', checked: true},
];

const MainContainer = () => {
    const [todoItemList, setTodoItemList] = useState<Todo[]>(todoList);
    const [index, setIndex] = useState(4);
    
    return (
        <div>
            <TodoCreator index={index} setIndex={setIndex} todoItemList={todoItemList} setTodoItemList={setTodoItemList}/>
            <TodoList todoItemList={todoItemList} setTodoItemList={setTodoItemList}/>
        </div>
    );
};

export default MainContainer;