import React, { useState } from 'react';
import { Header, List } from './components';
function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (newText) => {
        setTodos([...todos, newText]);
    };

    return (
        <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
            <main className="bg-white w-6/12 h-screen p-[50px]">
                <Header addTodo={addTodo} />
                <List todos={todos} setTodos={setTodos} />
            </main>
        </div>
    );
}

export default App;
