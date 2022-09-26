import { type } from "os"

export interface noteState {
    note: any[],
    inArchive: number,
    notInArchive: number,
}

export enum noteCategory {
    TASK = 'Task',
    RANDOM_THOUGHT = 'Random thought',
    IDEA = 'Idea'
}

export interface noteObj {
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    noteNum: number | null,
    archived: boolean
}

export enum NoteActionType {
    ADD_NEW_NOTE = 'ADD_NEW_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    GET_NOTE ='GET_NOTE',
    DELETE_NOTE = 'DELETE_NOTE'
}

interface addNewNote {
    type: NoteActionType.ADD_NEW_NOTE,
    noteObj: noteObj,
}

interface editNote {
    type: NoteActionType.EDIT_NOTE,
    noteNum: number,
    noteObj: noteObj
}

interface getNote {
    type: NoteActionType.GET_NOTE,
}
interface deleteNote {
    type: NoteActionType.DELETE_NOTE
    noteNum: number
}



export type NoteAction = addNewNote | editNote | getNote | deleteNote;