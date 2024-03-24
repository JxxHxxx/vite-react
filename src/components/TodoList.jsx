/* eslint-disable react/prop-types */

export default function TodoList({ todos }) {

    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )

};
