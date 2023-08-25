import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "./Timeline.css";

export default function BasicTimeline() {
    return (
        <div className=" content-tl">
            <p className='content-p'>Wrong with self-improvement and how we are fixing it.</p>
            <h3>Self-improvement. Ugh. </h3>
            <div className="main-tl">
                <Timeline className='tl-margin'>
                    <TimelineItem className='container-tl'>
                        <TimelineSeparator>
                            <TimelineDot className='tl-dot' style={{ backgroundColor: "#6141eb " }} />
                            <TimelineConnector style={{ backgroundColor: " #6141eb" }} />
                        </TimelineSeparator>
                        <TimelineContent className='tl-text'> <h5>It's not as easy as 1-2-3.</h5><p>
                            consequuntur voluptate tempore, oculpa provident illum sint unde.</p></TimelineContent>
                    </TimelineItem>
                    <TimelineItem className='container-tl'>
                        <TimelineSeparator>
                            <TimelineDot className='tl-dot' style={{ backgroundColor: "#6141eb " }} />
                            <TimelineConnector style={{ backgroundColor: " #6141eb" }} />
                        </TimelineSeparator>
                        <TimelineContent className='tl-text'><h5>Old habits are hard to break.</h5><p>consectetur adipisicing elit. Placeat cupiditate sit officiis laborum repudiandae labore molestias!</p></TimelineContent>
                    </TimelineItem>
                    <TimelineItem className='container-tl'>
                        <TimelineSeparator>
                            <TimelineDot className='tl-dot' style={{ backgroundColor: "#6141eb " }} />
                            <TimelineConnector style={{ backgroundColor: " #6141eb" }} />
                        </TimelineSeparator>
                        <TimelineContent className='tl-text'><h5>You and your motivation don't have a long-term relationship.</h5><p>Lorem ipsum amet consectetur adipisicing elit.  Architecto doloremque  maxime nesciunt cupiditate?
                        </p></TimelineContent>
                    </TimelineItem>
                    <TimelineItem className='container-tl'>
                        <TimelineSeparator>
                            <TimelineDot className='tl-dot' style={{ backgroundColor: "#6141eb " }} />
                            <TimelineConnector style={{ backgroundColor: " #6141eb" }} />
                        </TimelineSeparator>
                        <TimelineContent className='tl-text'><h5>Books just don't offer practical solutions.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem optio eaque quisquam distinctio sapiente?</p></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}      
