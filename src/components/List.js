import React, { useState } from 'react';
import Item from './item';
const List = ({ todos, setTodos }) => {
    // 一開始都沒有高亮
    const [isSelected, setIsSelected] = useState(null);
    //最後點擊的高亮
    const handleItemClick = (index) => {
        if (isSelected !== index) {
            setIsSelected(index);
        } else {
            //已經高亮則取消高亮
            setIsSelected(null);
        }
    };
    //把刪除的項目過濾掉
    const handleItemDelete = (index) => {
        const updatedTodo = todos.filter((_, i) => i !== index);
        setTodos(updatedTodo);
    };

    return (
        <ul className="todo-main">
            {todos.map((todo, index) => (
                <Item
                    key={index}
                    todo={todo}
                    isSelected={isSelected === index}
                    onClick={() => handleItemClick(index)}
                    onDelete={() => handleItemDelete(index)}
                />
            ))}
        </ul>
    );
};

export default List;
