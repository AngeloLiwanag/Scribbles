import React from 'react';
import styles from './scribble.module.css'

const Input = ({scribble, setScribble}) => {
    let context = {
        text: ''
    }

    const handleChange = e => {
        context.text = e.target.value
    }

    const handleSubmit = e => {
        e.preventDefault();
        setScribble([...scribble, context])
        console.log(scribble)
    }

    return(
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} name="context" type="text" className={styles.scribbleInput}/>
            <button className={styles.scribbleButton}>scribble</button>
        </form>
    )
}

export default Input;