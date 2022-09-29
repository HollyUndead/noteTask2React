import React from "react";
import './buttonForNotes.css'
import { useDispatch } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';
import { DeleteNote,ToArchive } from "../store/action-creator/note";
import { noteTypeSelector } from "../hooks/noteTypeSelector";

interface noteId{
    id: number,
    setActive: any,
    setNoteObj: any,
    setEditAc: any
}

function ButtonForNotes(props: noteId){
    const edit = require('../img/edit.png')
    const archive = require('../img/archive.png')
    const deleteNotes = require('../img/delete.png')
    const dispatch = useDispatch();

    const {note} = noteTypeSelector(state => state.note)
 
    function editNote(id:number){
        props.setActive(true)
        props.setEditAc(true)
        let notes = note.find(note => note.noteNum === id)
        props.setNoteObj(notes)
    }

    function toArchive(id:number){
        dispatch(ToArchive(id))
    }

    function deleteNote(id:number){
        dispatch(DeleteNote(id))
    }

    return(
        <div id={'noteButton'+props.id} className="noteButton" key={props.id}>
            <button id={"btnEditNote"+props.id} onClick={e => editNote(props.id)}><img src={edit} alt="" ></img></button>
            <button id={"btnArchiveNote"+props.id} onClick={e =>
                toArchive(props.id)
            }><img src={archive} alt=""></img></button>
            <button id={"btnDeleteNote"+props.id} onClick={e =>
                deleteNote(props.id)
            }><img src={deleteNotes} alt=""></img></button>
        </div>
    )

}

export default ButtonForNotes;