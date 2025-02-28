
import axios from 'axios' ;

export const FETCH_NOTES = "FETCH_NOTES" ;
export const fetchnotes = () => async (dispatch) => {

    try{
       const response = await fetch(
        `https://reactappmain-320ef-default-rtdb.firebaseio.com/Notes.json`
       );
       const data = await response.json();
    //    console.log(data);
       const notes = data?Object.entries(data).map( ( [ id, value]) => ( { id, ...value})) :[];
    //    console.log(notes)
       dispatch({ type: FETCH_NOTES, payload: notes})
    } catch(err) {
        console.log("error in fetching notes" , err)
    }
}