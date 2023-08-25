import React from "react";
import NotesItem from "./NotesItem";
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "./Notes.css";

const Notes = (props) => {return (
        <div className="content-notes">
            <div className="main-notes">
                <h2>Does this sounds familiar...</h2>
                <img className="doodle4"
                    src={require("../../assets/images/doodle.png")}
                    alt="doodle"
                />
            </div>
            <div className="notes">
                <div className="notes-box" >
                    <NotesItem emoji={<SentimentDissatisfiedTwoToneIcon />} />
                </div>
                <div className="notes-box" >
                    <NotesItem emoji={<SentimentSatisfiedAltIcon />} />
                </div>
                <div className="notes-box" >
                    <NotesItem emoji={<SentimentNeutralIcon />} />
                </div>
                <div className="notes-box"  >
                    <NotesItem emoji={<SentimentSatisfiedAltIcon />} />
                </div>

            </div>

        </div>

    )
}

export default Notes;
