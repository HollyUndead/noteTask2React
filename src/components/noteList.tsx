import React from 'react'
import { noteTypeSelector } from '../hooks/noteTypeSelector';
import { noteReducer } from '../store/reducers/noteReducer';
import { NoteActionType, noteState, NoteAction, noteObj } from '../types/note';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchNotes, addNewNote } from '../store/action-creator/note';
import type {} from 'redux-thunk/extend-redux';



const NoteList: React.FC = () =>{
    let a: noteObj = {
        "name": "Go to the hospitals",
        "created": "5/10/20",
        "category": "Task",
        "content": "Needed to be in the hospital at 3pm 15/10/20",
        "dates": "-",
        "noteNum": null,
        "archived": false
    }

    const dispatch = useDispatch()

    const {note, inArchive, notInArchive} = noteTypeSelector(state => state.note)

    useEffect( () => {
        dispatch(fetchNotes())
    }, [])
    

    function add(){    
        dispatch(addNewNote(a))
    }
    
    return(
        <div>
            {note.map((note) =>
                <div key={note.noteNum}>
                    {note.name}
                </div>
                )}
            <button onClick={add}>Click to add</button>
        </div>
    )
}

export default NoteList;