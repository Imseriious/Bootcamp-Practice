import React from 'react';

const Chapter = (props) => {
    return(
        <div style={{
            display: 'flex';
        }}>
            <div style={{

            }}>
                <span>{props.day}</span>
                <p>{props.date}</p>

            </div>



        </div>
    )
}





export default Chapter;