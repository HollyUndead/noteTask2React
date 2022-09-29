import React from 'react'
import { noteTypeSelector } from '../hooks/noteTypeSelector';
import { noteObj } from '../types/note';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchNotes, addNewNote } from '../store/action-creator/note';
import type {} from 'redux-thunk/extend-redux';
import './noteList.css'
import { searchForDates } from '../functions/createDate';
import ButtonForNotes from './buttonForNotes';


interface arc {
    archive: boolean,
    setActive: any,
    setNoteObj: any,
    setEditAc: any
}



const NoteList = (props: arc) =>{
    const idea = require('../img/idea.png')
    const RandomThought = require('../img/random thoughts.png')
    const task = require('../img/task.png')

    const dispatch = useDispatch()

    const {note} = noteTypeSelector(state => state.note)

    useEffect( () => {
        dispatch(fetchNotes())
    }, [])
    
    return(
        <div>
            {note.map((note) => {
                let notInArc = [];
                let inArc =[];
                if (note.archive === false){
                    notInArc.push(note)
                }else{
                    inArc.push(note)
                }
                let notes;
                if (props.archive === true){
                    notes = inArc;
                }else{
                    notes = notInArc;
                }
                let src:string;
                switch(note.category){
                    case 'Idea':
                        src = idea
                        break;
                    case 'Random thought':
                        src = RandomThought
                        break;
                    case 'Task':
                        src = task
                        break;
                }
                return(
                    notes.map(note =>
                <div className='NoteList' id={''+note.noteNum} key={note.noteNum}>
                    <img id='categoryIMG' src={src} alt="" />
                    <p id='name'>{note.name}</p>
                    <p id='created'>{note.created}</p>
                    <p id='category'>{note.category}</p>
                    <p id='content'>{note.content}</p>
                    <p id='dates'>{searchForDates(note.content)}</p>
                    <div><ButtonForNotes setEditAc={props.setEditAc} setActive={props.setActive} id={note.noteNum} setNoteObj={props.setNoteObj}/></div>
                </div>)
                )
                }
            )}
        </div>
    )
}

export default NoteList;