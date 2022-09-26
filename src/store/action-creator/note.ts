import { NoteAction, NoteActionType, noteObj } from "../../types/note"
import {Dispatch} from 'redux'
import axios from 'axios'

let counter = 0;

export function fetchNotes() {
    return async (dispatch: Dispatch<NoteAction>) => {
        const starterNotes = await axios.get('https://raw.githubusercontent.com/HollyUndead/justJSON/main/notes.json')
        starterNotes.data.data.forEach ((a: noteObj) => {
        dispatch({type: NoteActionType.ADD_NEW_NOTE, noteObj: a})
        })
    }
}


export function addNewNote(note: noteObj){
    return (dispatch: Dispatch<NoteAction>) =>{
        dispatch({type: NoteActionType.ADD_NEW_NOTE, noteObj: note})
    }
}