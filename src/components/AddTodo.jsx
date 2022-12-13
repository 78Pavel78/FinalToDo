import React from 'react'

const AddTodo = ({ text, handleTextChange, addTodo, handleKeyDownInput, deleteAll }) => {

    return (
        <div className='add-todo'>
            <input
                type="text"
                className='add-todo__input'
                placeholder='Note HERE !'
                value={text}
                onChange={(e) => handleTextChange(e)}
                onKeyDown={(e) => handleKeyDownInput(e)}
            />
            <button
                type='submit'
                className='add-todo__btn'
                onClick={addTodo}
            >Add</button>
            <button
                type='submit'
                className='deleteAll__btn'
                onClick={deleteAll}
            >delete All</button>
        </div>
    );
}

export default AddTodo;
