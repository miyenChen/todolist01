import React from 'react';
const Item = ({ todo, onClick, isSelected, onDelete }) => {
    //刪除已經勾選的
    const handleChange = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            onDelete();
        }
    };
    return (
        <li className={`${isSelected ? 'bg-gray-200' : ''} py-2 flex items-center`}>
            <input type="checkbox" className="mx-5" onChange={handleChange} />
            <span className="grow" onClick={onClick}>
                {todo}
            </span>
        </li>
    );
};

export default Item;
