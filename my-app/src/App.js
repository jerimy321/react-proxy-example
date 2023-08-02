import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook, getAllTodoList, createTodoList } from './services/BookService';
import Footer from './components/Footer';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';



function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  useEffect(() => {
    getAllBook();
    getAllTodos(); 
  }, []);


  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const handleTodoSubmit = () => {
    createTodoList(todoData).then(() => {
      setNumberTodos(numberOfTodos + 1);
    });
  };

  const [todoData, setTodoData] = useState({
    todo: '',
    category: '',
    isComplete: false,
  });

  const handleChangeTodoForm = (e) => {
    const { name, value, type } = e.target;

  
    const newValue = type === 'checkbox' ? e.target.checked : value;

    setTodoData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const getAllTodos = () => {
    getAllTodoList().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
        />
        <BookTable books={books} />
        <CreateTodo
          todoData={todoData}
          onChangeTodoForm={handleChangeTodoForm}
          handleTodoSubmit={handleTodoSubmit}
        />
        <TodoList todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
