import React from 'react'
import { ListItemText, ListItem, List } from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                
                <ListItemText primary="Todo" secondary={props.text} />
            </ListItem>
        </List>
    )
}

export default Todo
