import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchnotes } from '../redux/actions/noteAction'

const Notes = () => {
    // const [ notes, setNotes] =useState("");
    // const [ data, setData] = useState("");
    
    const notes = useSelector( ( state) => state.notes)
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(fetchnotes());
    }) 

  return (
    <div key={notes.key} >
        <h1> Welcome to notes</h1>
         { notes.length>0 && notes.map( (product) => {
            return <h3  > {product.text}</h3>
         })}

    
    </div>
  )
}

export default Notes