import React from "react";
import { noteTypeSelector } from "../hooks/noteTypeSelector";
import './noteCategory.css'


function NoteCategory(){

    const {note, taskArctive, taskArchived, ideaActive, ideaArchived, randomActive, randomArchived} = noteTypeSelector(state => state.note)
    const category = ['Idea', 'Random thought', 'Task']
    
    return(
        <div>
            <div id="Idea" className="categoryDiv">
                <p>Idea</p>
                <p>{ideaActive}</p>
                <p>{ideaArchived}</p>
            </div>
            <div id="Random thought" className="categoryDiv">
                <p>Random thought</p>
                <p>{randomActive}</p>
                <p>{randomArchived}</p>
            </div>
            <div id="Task" className="categoryDiv">
                <p>Task</p>
                <p>{taskArctive}</p>
                <p>{taskArchived}</p>
            </div>
        </div>
    )
}

export default NoteCategory;