import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';
import { Grid,Button,List,ListItem,ListItemAvatar,ListItemText,ListItemSecondaryAction,IconButton,Avatar } from '@material-ui/core';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

export default class App extends Component {
  state={
    todovalue:"",
    finalvalue:"",
    updatetime:""
  }
  onChange=(event)=>{
    this.setState({todovalue:event.target.value})    
    // console.log(this.state.todovalue)
  }
  onSubmit=()=>{
    this.setState({
      finalvalue:this.state.todovalue,
      updatetime:moment().format('MMMM Do YYYY, h:mm:ss a'),  
    })
  }

  render() {
    return (
      <div align="center">
        <h1>To Do App <text style={{color:'lightgray',fontSize:10}}>By Anish Dai</text></h1>
        <form>
          <TextField 
            onChange={this.onChange}
            id="outlined-textarea"
            label="Note your plan"
            placeholer="Placeholder"
            value={this.state.value}
            rowsMax={4}
            multiline
            variant="outlined"          
          />
          &nbsp;&nbsp;&nbsp;<Button onClick={this.onSubmit} variant="contained" size="large">Add Your Thing</Button>
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
                  primary={this.state.finalvalue} secondary={this.state.updatetime}/>
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
