import React from "react";
import ButtonsForNoteList from "./buttonsForNoteListBar";
import './topbar.css'

interface counter {
    counter: boolean,
    archive: boolean
}




function Topbar(props: counter){
    let arr1 = [{num: 1, str: 'name'}, {num: 2, str: 'created'}, {num: 3, str: 'category'}, {num: 4, str: 'content'}, {num: 5, str: 'dates'}]
    let arr2 = [{num: 1, str: 'CategoryName'}, {num: 2, str: 'Active'}, {num: 3, str: 'Archived'}]

    let str;
    if (props.archive === true){
        str = 'Archived'
    }
    else{
        str = 'Active'
    }

    if (props.counter === false){
        return( 
            <div className="topBar NoteListBar">
                <p id="activePage">{str}</p>
                {arr1.map(str => <p id={'item'+str.num} key={str.num}>{str.str}</p>)}
                <ButtonsForNoteList />
            </div>
        )
    }else{
        return( 
            <div className="topBar Archive">
                {arr2.map(str => <p key={str.num}>{str.str}</p>)}
            </div>
        )
    }
}

export default Topbar;