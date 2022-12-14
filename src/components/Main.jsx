import React, { useState } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos';



const Main = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const addTodo = () => {
        if (!text) {
            return;
        }

        let newTodos =
            todos === null
                ? [
                    {
                        id: new Date().toLocaleString(),
                        text: text,
                        isFavorite: false
                    },
                ]
                : [
                    {
                        id: new Date().toLocaleString() ,
                        text: text,
                        isFavorite: false
                    },
                    ...todos,
                ];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(JSON.parse(localStorage.getItem("todos")));
        setText("");
    };

    const handleKeyDownInput = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const deleteTodo = (elementId) => {
        let newTodos = todos.filter((item) => {
            if (item.id === elementId) {
                return false;
            }
            return true;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(JSON.parse(localStorage.getItem("todos")));
    };

    const favoriteTodo = (elementId) => {
        let newTodos = todos.map((item) => {
            if (item.id === elementId) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite,
                };
            }
            return item;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(JSON.parse(localStorage.getItem("todos")));
    };

    const deleteAll = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure?')) 
        localStorage.removeItem('todos');
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }

    return (
        <div>
            <AddTodo
                text={text}
                handleTextChange={handleTextChange}
                handleKeyDownInput={handleKeyDownInput}
                addTodo={addTodo}
                deleteAll={deleteAll}
            />
            <Todos
                text={text}
                todos={todos}
                deleteTodo={deleteTodo}
                favoriteTodo={favoriteTodo}
            />
        </div>
    );
}

export default Main;

