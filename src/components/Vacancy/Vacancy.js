import React from "react";
import "./Vacancy.css";

const Vacancy = () => {
    return (
        <div className="content-vacancy">
            <h3>Open vacancies </h3>
            <div className="vacancy">
                <div className=" va-margin">
                    <h5>Senior Full-Stack Engineer</h5>
                    <ol >
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>&euro;65-85k, 0.5-1.50% equity share options</li>
                    </ol>
                    <button className="btn-vc">See Details</button>
                </div>
                <div className=" va-margin">
                    <h5>Senior Designer</h5>
                    <ol>
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>&euro;40-55k, 0.25-0.50% equity share options</li>
                    </ol>
                    <button className="btn-vc">See Details</button >
                </div>
                <div className=" va-margin">
                    <h5>Superstar Intern</h5>
                    <ol>
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>&euro;20-24k, 0.5-1.50% equity share options</li>
                    </ol>
                    <button className="btn-vc">See Details</button>
                </div>

            </div>
        </div>
    )
}

export default Vacancy;
