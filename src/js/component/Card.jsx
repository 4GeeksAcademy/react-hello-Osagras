import React from "react";
import PropTypes from "prop-types"

export const Card = (prop) => {
    return (
        <div className="card my-3 h-100">
            <img className="card-img-top" src={prop.image} alt="Card image cap"/>
            <div className="card-body text-center">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">{prop.description}</p>
            </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item"><a href={prop.buttonUrl} className="btn btn-primary">{prop.buttonLabel}</a></li>
                </ul>
         </div>)
}

Card.propTypes = {
    image: PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    buttonUrl:PropTypes.string,
    buttonLabel:PropTypes.string,
}