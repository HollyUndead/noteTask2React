import React from 'react';
import './app.css'
import NoteList from './components/noteList';
import TodoList from './components/todoList';



function App() {

  return (
    <div className="App">
      <NoteList />
      <hr />
      {/* <TodoList></TodoList> */}
    </div>
  );
}

export default App;
