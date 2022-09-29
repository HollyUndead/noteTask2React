
export interface noteState {
    note: any[],
    taskArctive: number,
    taskArchived: number,
    ideaActive: number,
    ideaArchived: number,
    randomActive: number,
    randomArchived: number
}

export interface noteObj {
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    noteNum: number | null,
    archive: boolean
}

export enum NoteActionType {
    ADD_NEW_NOTE = 'ADD_NEW_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    GET_NOTE ='GET_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    SWITCHER_ARCHIVE = 'SWITCHER_ARCHIVE'
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
    noteNum: number
}
interface deleteNote {
    type: NoteActionType.DELETE_NOTE,
    noteNum: number
}

interface switcherArchive{
    type: NoteActionType.SWITCHER_ARCHIVE,
    noteNum: number
}


export type NoteAction = addNewNote | editNote | getNote | deleteNote | switcherArchive;