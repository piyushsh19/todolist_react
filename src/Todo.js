import React from 'react'
import { ListItemText, ListItem, List, Button } from '@material-ui/core'
import db from './firebase'

function Todo(props) {
    return (
        <List>
            <ListItem>
                
                <ListItemText primary={props.text.text} secondary= 'Todo Task' />
            </ListItem>
            <Button onClick= {event => {
            db.collection('todos').doc(props.text.id).delete();
        }}>Delete Me</Button>
        </List>
        
    )
}

export default Todo
