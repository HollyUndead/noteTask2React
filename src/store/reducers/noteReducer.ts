import { noteState, NoteActionType, NoteAction } from "../../types/note"



const initialState: noteState = {
    note: [],
    taskArctive: 0,
    taskArchived: 0,
    ideaActive: 0,
    ideaArchived: 0,
    randomActive: 0,
    randomArchived: 0
}



export function noteReducer(state = initialState, action: NoteAction): noteState{
    let arr = state.note
    let noteIndex, noteCounter;
    switch (action.type){

        case NoteActionType.ADD_NEW_NOTE:
            let notes = action.noteObj
            if (notes.noteNum == null){
                let note1 = state.note.slice(-1)
                noteCounter = note1[0].noteNum++
                notes.noteNum = noteCounter;
            }else {
                noteCounter = notes.noteNum
            }
            arr.push(action.noteObj)
            switch (notes.category){
                case 'Task':
                    if(notes.archive === true){
                        state.taskArchived++
                    }else{
                        state.taskArctive++
                    }
                    break;
                case 'Random thought':
                    if(notes.archive === true){
                        state.randomArchived++
                    }else{
                        state.randomActive++
                    }
                    break;
                case 'Idea':
                    if(notes.archive === true){
                        state.ideaArchived++
                    }else{
                        state.ideaActive++
                    }
                    break;
            }
            return {...state};

        case NoteActionType.EDIT_NOTE:
            noteIndex = arr.indexOf(arr.find(note => note.noteNum === action.noteNum))
            arr.splice(noteIndex, 1, action.noteObj)
            return {...state}

        case NoteActionType.DELETE_NOTE:
            let noteForDelet = arr.find(note => note.noteNum === action.noteNum)
            noteIndex = arr.indexOf(noteForDelet)
            switch (noteForDelet.category){
                case 'Task':
                    if(noteForDelet.archive === true){
                        state.taskArchived--
                    }else{
                        state.taskArctive--
                    }
                    break;
                case 'Random thought':
                    if(noteForDelet.archive === true){
                        state.randomArchived--
                    }else{
                        state.randomActive--
                    }
                    break;
                case 'Idea':
                    if(noteForDelet.archive === true){
                        state.ideaArchived--
                    }else{
                        state.ideaActive--
                    }
                    break;
            }
            arr.splice(noteIndex, 1)
            return {...state}

        case NoteActionType.SWITCHER_ARCHIVE:
            let noteForSwitch = arr.find(note => note.noteNum === action.noteNum)
            noteIndex = arr.indexOf(arr.find(note => note.noteNum === action.noteNum))
            let switcher = !noteForSwitch.archive;
            noteForSwitch.archive = switcher;
            switch (noteForSwitch.category){
                case 'Task':
                    if(noteForSwitch.archive === true){
                        state.taskArchived++
                        state.taskArctive--
                    }else{
                        state.taskArctive++
                        state.taskArchived--
                    }
                    break;
                case 'Random thought':
                    if(noteForSwitch.archive === true){
                        state.randomArchived++
                        state.randomActive--
                    }else{
                        state.randomActive++
                        state.randomArchived--
                    }
                    break;
                case 'Idea':
                    if(noteForSwitch.archive === true){
                        state.ideaArchived++
                        state.ideaActive--
                    }else{
                        state.ideaActive++
                        state.ideaArchived--
                    }
                    break;
            }
            arr.splice(noteIndex, 1, noteForSwitch)
            return {...state} 
            
        default: 
            return {...state}

    }
}