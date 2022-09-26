import { noteState, NoteActionType, NoteAction } from "../../types/note"



const initialState: noteState = {
    note: [],
    inArchive: 0,
    notInArchive: 0,
}

let noteCounter = 0;

export function noteReducer(state = initialState, action: NoteAction): noteState{
    let arr = state.note
    let inAr = state.inArchive
    let notInArc = state.notInArchive
    let noteIndex;
    switch (action.type){

        case NoteActionType.ADD_NEW_NOTE:
            let note = action.noteObj
            if (note.noteNum == null){
                note.noteNum = noteCounter;
                noteCounter++
            }
            console.log(arr)
            arr.push(action.noteObj)
            console.log(arr)
            if (note.archived == true){
                inAr++
            }else{
                notInArc++
            }
            return {note: arr, inArchive: inAr, notInArchive: notInArc};

        case NoteActionType.EDIT_NOTE:
            noteIndex = arr.indexOf(arr.find(note => note.noteNum === action.noteNum))
            arr.splice(noteIndex, 1, action.noteObj)
            return {note: arr, inArchive: inAr, notInArchive: notInArc}

        case NoteActionType.DELETE_NOTE:
            noteIndex = arr.indexOf(arr.find(note => note.noteNum === action.noteNum))
            arr.splice(noteIndex, 1)
            return {note: arr, inArchive: inAr, notInArchive: notInArc}

            case NoteActionType.GET_NOTE:
                let a = state
                return a

        default: 
            return state

    }
}