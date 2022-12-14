import React, { Fragment } from "react";
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <Fragment>
            { robots.map((user, i) => {
                return (
                        <Card 
                            key={i} 
                            name={robots[i].name} 
                            username={robots[i].username} 
                            email={robots[i].email} />
                    );
                }) 
            }
        </Fragment>
    );
}

export default CardList;