import React,{useState} from 'react';
//material ui components for styling
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


export default function CreateArea(props) {

    const[isExpanded , setIsExpanded] =useState(false);
    // constants to keep track of title and content and manage their state with handleChange func
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return {
            ...prevNote,
            [name] :value
            }


        })
    }
    // ---------------------------------------------------------------------------------------------


    // passing the new note created to the App component when user presses Add btn

    function submitNote(event){
    // note is passed using onAdd(note) function which is passsed as prop and is used in app.js to add note in array
        props.onAdd(note);

        // to clear out the input note when add is pressed
        setNote({
            title:"",
            content:""
        });
        
        // to prevent the refreshing of form
        event.preventDefault();
    }
    function expand(){
      setIsExpanded(true);
    }

    return (
        <div >
          <form class="create-note">
            {isExpanded ?<input
              onChange={handleChange}
              name="title"
              placeholder="Title"
              value={note.title}
            /> :null }
            <textarea
              onClick={expand}
              onChange={handleChange}
              name="content"
              placeholder="Take a note..."
              value={note.content}
              rows={isExpanded?3:1}
              
            />
            <Zoom in={isExpanded} timeout={1800}>
            <Fab onClick= {submitNote}><AddIcon /></Fab>
            </Zoom>
          </form>
        </div>
      );
}


