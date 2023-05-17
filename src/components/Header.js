import React from 'react';

const Header = ({ value, addTodo }) => {
    const handleKeyUp = (event) => {
        const { key, target } = event;
        //按Enter且有值才會送出
        if (key !== 'Enter') return;
        if (target.value.trim() === '') {
            alert('不能為空');
            return;
        }
        //送出值
        addTodo(target.value);
        //清空input
        target.value = '';
    };

    return (
        <div>
            <h1 className="text-center text-5xl font-bold">To Do List</h1>
            <input
                className="bg-gray-200 px-4 py-2 my-4 w-full rounded-lg text-lg"
                type="text"
                placeholder="請輸入待辦事項"
                value={value}
                onKeyUp={handleKeyUp}

                // onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Header;
