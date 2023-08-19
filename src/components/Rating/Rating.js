import React from "react";
import { Stepper, Step, steps, StepLabel } from '@mui/material';


import "./Rating.css";

const Rating = () => {
    const steps = [
        'Answer the questions onyour social skills',
        'Let others anonymously answer the same questions about you',
        'Find out where you and others see things the same way and where',
        ];
    return (
        <div className="content-rating">
            <p>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
            <h3>Ever wondered what others think of you?</h3>
         

         
            {/* <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}

        </div>

    )
}

export default Rating;
