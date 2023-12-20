import React from "react"
import PropTypes from "prop-types"

export const Jumbotron = (prop) => {
    return (
    <div class="jumbotron bg-light mt-3 pb-3">
        <h1 class="display-4">{prop.title}</h1>
        <p class="lead">{prop.description}</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href={prop.buttonUrl} role="button">{prop.buttonLabel}</a>
        </p>
    </div>)
}

Jumbotron.defaultProps = {
    title: "My Landing Page",
    description: "This is the landing page created by Osagras",
    buttonUrl: "http://osagras.github.io/",
    buttonLabel: "Osagras' Website"
}

Jumbotron.propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
    buttonUrl:PropTypes.string,
    buttonLabel:PropTypes.string,
}