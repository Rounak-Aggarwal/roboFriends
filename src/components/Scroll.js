import React from 'react';

const Scroll = (props) => {         //To add styles in div I can create a new file .css or I can do it inine also using {{}}, the outer brackets are for js and nner for object
    return(
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '700px'}}>                    
            {props.children}
        </div>
    );
};

export default Scroll;