import React, {useState} from 'react';
import './app.css'
import FromToCreateNote from './components/fromToCreateNote';
import NoteCategory from './components/noteCategory';
import NoteList from './components/noteList';
import Topbar from './components/topbar';
import { noteTypeSelector } from './hooks/noteTypeSelector';
import { noteObj } from './types/note';


const initNoteObj: noteObj = {
  name: '',
  created: '',
  category: '',
  content: '',
  dates: '',
  noteNum: null,
  archive: false
}

function App() {
  const {archived} = noteTypeSelector(state => state.archived)
  const [active, setActive] = useState(false)
  const [noteObj, setNoteObj] = useState(initNoteObj)
  const [editAc, setEditAc] = useState(false)
  return (
    <div className="App">
      <Topbar counter={false} archive={archived}></Topbar>
      <NoteList setEditAc={setEditAc} setActive={setActive} archive={archived} setNoteObj={setNoteObj}/>
      <button id='OpenPopupForm' onClick={() => setActive(true)}>Create note</button>
      <Topbar counter={true} archive={archived}></Topbar>
      <NoteCategory />
      <FromToCreateNote setEditAc={setEditAc} editAc={editAc} active={active} setActive={setActive} noteObj={noteObj} setNoteObj={setNoteObj}/>
    </div>
  );
}

export default App;
