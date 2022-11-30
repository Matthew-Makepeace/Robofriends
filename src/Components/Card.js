import React, { Fragment } from "react";

const Card = ({ name, email, username }) => {
    return (
        <Fragment>
            <div className="bg-light-purple dib br3 pa3 ba bw2 b--light-blue ma2 grow shadow-4">
                <img src={`https://robohash.org/${username}`} alt='prof pic'/>
                <div className="tc dark-blue">
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;