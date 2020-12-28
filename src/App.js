import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';
import { Grid,Button,List,ListItem,ListItemAvatar,ListItemText,ListItemSecondaryAction,IconButton,Avatar } from '@material-ui/core';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import DeleteIcon from '@material-ui/icons/Delete';

export default class App extends Component {
  render() {
    return (
      <div align="center">
        <h1>To Do App <text style={{color:'lightgray',fontSize:10}}>By Anish Don</text></h1>
        <form>
          <TextField
            id="outlined-textarea"
            label="Note your plan"
            placeholer="Placeholder"
            rowsMax={4}
            multiline
            variant="outlined"          
          />
          &nbsp;&nbsp;&nbsp;<Button variant="contained" size="large">Add Your Thing</Button>
          <div style={{marginLeft:"36%"}}>
            <Grid container>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BurstModeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Things to do" secondary="Jan 1,2021"/>
                <div style={{paddingLeft:50}}>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                </div>
              </ListItem>
              
              </List>
            </Grid>
          </div>  
        </form>
      </div>

    )
  }
}
