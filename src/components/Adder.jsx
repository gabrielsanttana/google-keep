import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab, Zoom } from "@material-ui/core";

function Adder(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [wasClicked, setWasClicked] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target; 

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick() {
        setWasClicked(true);
    }

    return (
        <div> 
            <form className="create-note">
                {wasClicked &&
                    <input 
                        name="title"
                        type="text" 
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange} 
                    />
                }
                
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={wasClicked ? 3 : 1}
                    value={note.content}
                    onChange={handleChange}
                    onClick={handleClick}
                >
                </textarea>
                {wasClicked &&
                    <Zoom in={true}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                }
                
            </form>
        </div>
    )
}

export default Adder;
