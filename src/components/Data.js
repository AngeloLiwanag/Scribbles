import React from 'react';
import styles from './scribble.module.css';

const Data = ({item, index, scribble, setScribble}) => {
    const handleDelete = e => {
        setScribble(() =>{
            return scribble.filter(item => scribble.indexOf(item) !== index)
        })
    }

    return(
        <div className={styles.scribbleData}>
            <p>{item.text}</p>
            <button onClick={handleDelete} className={styles.btnDelete}>delete</button>
            <button className={styles.btnUpdate}>update</button>
        </div>
    )
}

export default Data;