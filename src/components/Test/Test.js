import React from "react";
import "./Test.css";

const Test = () => {
    return (
        <div className="content-test">
            <div className="test">
                <p className="p1">We take privacy seriously</p>
                <p className="p2">Before you get started</p>
                <p className="p3">"We won't share your answer with anyone (and won't even tell</p>
                <p className="p3"> you which friends said what about you)"</p>
                <div className="test-sign">
                    <div className="p1"><p> with love,</p></div>
                    <div className="sign p1"> <p > Team ahead</p> </div>
                </div>

                <button>Start a test</button>
                <div className="p4">take only 5 minutes</div>
            </div>

        </div>

    )
}

export default Test;
