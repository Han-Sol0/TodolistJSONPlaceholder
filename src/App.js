import "./App.css";
import { useEffect, useState } from "react";
import Completed from "./components/completed";

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((loadedData) => loadedData.json())
            .then((loadedList) => {
                setTodoList(loadedList);
            });
    }, []);

    return (
        <div className="App">
            {todoList.map(({ id, title, completed }) => (
                <div className="Do" key={id}>
                    <span>{title}</span>
                    {Completed(completed)}
                </div>
            ))}
        </div>
    );
}

export default App;
