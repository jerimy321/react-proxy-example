// CreateTodo.js

const CreateTodo = ({ onChangeTodoForm, handleTodoSubmit }) => {
    return (
      <div className="form-wrapper">
        <div className="form">
          <form>
            <div className="input-group">
              <label>Todo</label>
              <input
                type="text"
                onChange={(e) => onChangeTodoForm(e)}
                name="todo"
                placeholder="todo"
              />
            </div>
            <div className="input-group">
              <label>Category</label>
              <input
                type="text"
                onChange={(e) => onChangeTodoForm(e)}
                name="category"
                placeholder="category"
              />
            </div>
            <div className="input-group">
              <label>Is Complete</label>
              <input
                type="checkbox"
                onChange={(e) => onChangeTodoForm(e)}
                name="isComplete"
              />
            </div>
            <button className="submit-button" onClick={() => handleTodoSubmit()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateTodo;
  