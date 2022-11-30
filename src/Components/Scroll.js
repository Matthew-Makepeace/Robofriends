import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '500px', margin: '1rem'}}>
            { props.children }
        </div>
    );
}

export default Scroll;