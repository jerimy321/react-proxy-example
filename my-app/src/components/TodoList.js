const TodoList = ({todos}) => {

    if (todos.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My todos</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>todo</th>
                            <th>Category</th>
                            <th>isComplete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo,index) => (
                                todo ? (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{todo.todo}</td>
                                        <td>{todo.category}</td>
                                        <td>{todo.isComplete}</td>
                                    </tr>
                                ) : null
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TodoList;