import React from 'react'
import "./Skills.css"


function Skills({ language, done }) {
    const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 200);
    return (
        <div className="skills">
            <h4>{language}</h4>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
            
        </div>
    )
}

export default Skills 

