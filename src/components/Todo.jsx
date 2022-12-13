import React from 'react'

const Todo = ({ id, text, isFavorite, deleteTodo, favoriteTodo }) => {
    return (
        <div className={`todo ${isFavorite && 'todo__favorite'}`}>
            <div className="todo__wrapper">
                <button
                    onClick={() => favoriteTodo(id)}
                    className="todo__star">&#10040;
                </button>
                <div className='todo_id' maxlength="5">
                    {id}
                </div>
                <div className="todo__text">
                    {text}
                </div>
            </div>
            <button
                onClick={() => deleteTodo(id)}
                className="todo__delete">&#10008;</button>
        </div>
    )
};

export default Todo;