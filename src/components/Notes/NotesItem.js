import React from "react";

import "./Notes.css";


const NotesItem = (props) => {
    let { emoji } = props;
    return (
        <div className="notesItem">
            <span>{emoji}</span>
            <h5>Lorem ipsum dolor sit.</h5>
            <p className="notes-p">Lorem ipsum dolor tate? Enim error eius quod.Before you get started</p>
        </div>
    )
}
export default NotesItem;