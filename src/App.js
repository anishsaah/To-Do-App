import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';
import { Grid,Button,List,ListItem,ListItemAvatar,ListItemText,ListItemSecondaryAction,IconButton,Avatar } from '@material-ui/core';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import firebase from 'firebase';

export default class App extends Component {
  state={
    todovalue:"",
    finalvalue:"",
    updatetime:"",
    firebasedata:[],
  }
  onChange=(event)=>{
    this.setState({todovalue:event.target.value})    
    // console.log(this.state.todovalue)
  }
  onSubmit=()=>{
    // this.setState({
    //   finalvalue:this.state.todovalue,
    //   updatetime:moment().format('MMMM Do YYYY, h:mm:ss a'),  
    // })
    const firestore=firebase.firestore();

    firestore.collection("todoapp").add({
      finalvalue:this.state.todovalue,
      updatetime:moment().format('MMMM Do YYYY, h:mm:ss a'),
    })
    .then(()=>{
      //console.log("Todoadded");
      window.location.reload()
    })

  }

  componentDidMount=()=>{
    this.getvalue()
  }


  getvalue = async()=>{
    const firestore=firebase.firestore();
    const recievevalue = await firestore.collection("todoapp").orderBy("updatetime","desc").get();
    this.setState({firebasedata:recievevalue.docs})
    // console.log(recievevalue.docs)
  }

  render() {
    
  var firebaseConfig = {
    apiKey: "AIzaSyD41jBNFBrhOTCWAzSGy6TVd6arfQ-h284",
    authDomain: "to-do-app-42382.firebaseapp.com",
    projectId: "to-do-app-42382",
    storageBucket: "to-do-app-42382.appspot.com",
    messagingSenderId: "1096233199629",
    appId: "1:1096233199629:web:be5c20503a2c5c33e10d44",
    measurementId: "G-SDC22HD6JP"
  };
  // Initialize Firebase
  if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
  }

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
              {
               this.state.firebasedata.map((val)=> 
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BurstModeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={val.data().finalvalue} secondary={val.data().updatetime}/>
                <div style={{paddingLeft:50}}>
                {/* <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction> */}
                </div>
              </ListItem>)
              }
              </List>
            </Grid>
          </div>  
        </form>
        
      </div>

    )
  }
}
