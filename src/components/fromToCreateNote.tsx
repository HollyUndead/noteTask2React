import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewNote, EditNote } from '../store/action-creator/note';
import { noteObj } from '../types/note';
import {formatDate} from '../functions/createDate'
import './formToCreateNote.css'

interface active{
    active: any,
    setActive: any,
    noteObj: noteObj,
    setNoteObj: any,
    setEditAc: any,
    editAc: boolean
}

const initNoteObj: noteObj = {
    name: '',
    created: '',
    category: '',
    content: '',
    dates: '',
    noteNum: null,
    archive: false
}

function FromToCreateNote(props: active){

    const inputName = document.getElementById('inputName') as HTMLInputElement
    const inputCategory  = document.getElementById('inputCategory') as HTMLInputElement
    const inputContent = document.getElementById('inputContent') as HTMLInputElement

    function closeModelForm(){
        props.setEditAc(false)
        props.setActive(false); 
        props.setNoteObj(initNoteObj);
        inputName.value = null;
        inputContent.value = null;
    }

    if(props.noteObj.name !== ''){
        inputName.value = props.noteObj.name;
        inputCategory.value = props.noteObj.category;
        inputContent.value = props.noteObj.content;
    }

    const dispatch = useDispatch()

    function editNote(){
        props.setActive(false);
        let note: noteObj = {
            name: inputName.value,
            created: props.noteObj.created,
            category: inputCategory.value,
            content: inputContent.value,
            dates: '',
            noteNum: props.noteObj.noteNum,
            archive: false
        }
        dispatch(EditNote(note, props.noteObj.noteNum))
        inputName.value = null;
        inputContent.value = null;
    }

    function submitNote(){
        props.setActive(false);
        let note: noteObj = {
            name: inputName.value,
            created: formatDate(new Date()),
            category: inputCategory.value,
            content: inputContent.value,
            dates: '',
            noteNum: null,
            archive: false
        }
        dispatch(addNewNote(note))
        inputName.value = null;
        inputContent.value = null;
    }

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={closeModelForm}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div>
                    <label htmlFor="inputName">Name</label><br />
                    <input id="inputName" type="text" name="name" required></input>
                </div>
                <div>
                    <label htmlFor="inputCategory">Category:</label><br />
                    <select name="inputCategory" id="inputCategory" defaultValue={'Idea'}>
                    <option value="Idea">Idea</option>
                    <option value="Random thought">Random thought</option>
                    <option value="Task">Task</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="inputContent">Content:</label><br />
                    <textarea name="inputContent" id="inputContent" rows={4} cols={50} required></textarea>
                </div>
                    <button id="btnSaveEdit" className={props.editAc ? 'btn' : 'btn hiden'} onClick={editNote}>Save Edit</button>
                    <button id="btnSubmit" onClick={submitNote} className={props.editAc ? 'btn hiden' : 'btn'}>Create note</button>
                    <button id="btnCancel" className="btn" onClick={closeModelForm}>Cancel</button>
            </div>
            
        </div>
    )
}

export default FromToCreateNote;