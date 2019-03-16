import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
// import {Home, Book ,AccountBox } from '@material-ui/icons';
import Posts from "./posts";

function NavBar(props){
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                    Home 
                    </Typography>
                </ListItemText>
            <ListItemText inset>
                <Typography onClick={Posts} color="inherit" variant="title">
                Posts 
                </Typography>
            </ListItemText>
            <ListItemText inset>
                <Typography color="inherit" variant="title">
                    contact  
                </Typography>
            </ListItemText>            
            </ListItem>

        </List>
    )
}
export default NavBar;