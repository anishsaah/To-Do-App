import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class App extends Component {
  render() {
    return (
      <div align="center">
        <h1>To Do App</h1>
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
        </form>

      </div>
    )
  }
}
