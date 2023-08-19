import React from "react";
import NotesItem from "./NotesItem";
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import "./Notes.css";

const Notes = (props) => {
    return (
        <div className="content-notes">
            <h2>Does this sounds familiar...</h2>
            <div className="notes">
                <div >
                
                    <NotesItem emoji={<SentimentDissatisfiedTwoToneIcon/>}/>
                </div>
                <div>
                    <NotesItem emoji={<SentimentSatisfiedAltIcon/>} />
                </div>
                <div>
                    <NotesItem emoji={<SentimentNeutralIcon/>} />
                </div>
                <div>
                    <NotesItem emoji={<SentimentSatisfiedAltIcon/>} />
                </div>
                {/* <div>
                    <NotesItem emoji={<SentimentNeutralIcon/>}/>
                </div> */}

            </div>

        </div>

    )
}

export default Notes;
