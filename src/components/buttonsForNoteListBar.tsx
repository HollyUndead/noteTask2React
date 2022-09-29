import React from 'react'
import { useDispatch } from 'react-redux';
import { noteTypeSelector } from '../hooks/noteTypeSelector';
import type {} from 'redux-thunk/extend-redux';
import {SwitcherArchived } from '../store/action-creator/archived';
import {useEffect} from 'react'
import './buttonForNoteList.css'

function ButtonsForNoteList(){
    const arc = require('../img/archive1.png')
    const del = require('../img/delete1.png')
    const dispatch = useDispatch();
    const {archived} = noteTypeSelector(state => state.archived)
    function switcher(){
        dispatch(SwitcherArchived(archived))
    }

    return (
        <div id='forButtons'>
            <button id="archiveSwitch" onClick={switcher} data-archived="0"><img src={arc} alt=""></img></button>
            <img src={del} alt=""></img>
        </div>
    )
}

export default ButtonsForNoteList;