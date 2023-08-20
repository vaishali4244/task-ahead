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
            <p>Wrong with self-improvement and how we are fixing it.</p>
            <h3>Self-improvement. Ugh. </h3>
           
            <Timeline  className='tl-margin'>
                <TimelineItem className='container-tl'>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent> <h5>It's not as easy as 1-2-3.</h5><p>
                        consequuntur voluptate tempore, obcaecati iste culpa provident illum sint unde.</p></TimelineContent>
                </TimelineItem>
                <TimelineItem className='container-tl'>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h5>Old habits are hard to break.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate sit officiis laborum repudiandae labore molestias!</p></TimelineContent>
                </TimelineItem>
                <TimelineItem className='container-tl'>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h5>You and your motivation don't have a long-term relationship.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel alias in omnis! Architecto doloremque mollitia reprehenderit maxime nesciunt cupiditate?
                        </p></TimelineContent>
                </TimelineItem>
                <TimelineItem className='container-tl'>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent><h5>Books just don't offer practical solutions.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem optio eaque quisquam distinctio sapiente?</p></TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}      
