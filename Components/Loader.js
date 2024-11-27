import React from 'react'
import classes from "../styles/Loader.module.css"
const Loader = () => {
    return (
        <div className={classes.container}><span className={classes.loader}></span></div>
    )
}

export default Loader