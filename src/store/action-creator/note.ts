import { NoteAction, NoteActionType, noteObj } from "../../types/note"
import {Dispatch} from 'redux'
import axios from 'axios'


export function fetchNotes() {
    return async (dispatch: Dispatch<NoteAction>) => {
        const starterNotes = await axios.get('https://raw.githubusercontent.com/HollyUndead/noteTask2React/master/src/store/action-creator/notes.json')
        starterNotes.data.data.forEach ((a: noteObj) => {
        dispatch({type: NoteActionType.ADD_NEW_NOTE, noteObj: a})
        })
    }
}

export function DeleteNote(id: number){
    return(dispatch: Dispatch<NoteAction>)=>{
        dispatch({type: NoteActionType.DELETE_NOTE, noteNum: id})
    }
}

export function EditNote(noteObj: noteObj, noteNum:number){
    return(dispatch: Dispatch<NoteAction>)=>{
        dispatch({type: NoteActionType.EDIT_NOTE, noteNum: noteNum, noteObj: noteObj})
    }
}

export function ToArchive(id: number){
    return(dispatch: Dispatch<NoteAction>)=>{
        dispatch({type: NoteActionType.SWITCHER_ARCHIVE, noteNum: id})
    }
}


export function addNewNote(note: noteObj){
    return (dispatch: Dispatch<NoteAction>) =>{
        dispatch({type: NoteActionType.ADD_NEW_NOTE, noteObj: note})
    }
}
