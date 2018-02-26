import React from 'react';
import NoteForm from '../note-create-form/index';
import NoteList from '../note-list/index.js'

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
    //========================
    //Binding Handlers
    //========================

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //======================
  //Member Fucntion
  //======================

  handleAddNote(note){
    note.createdOn = new Date();
    note.id = Math.random().toString();

    this.setState(previousState => {
      return {notes :[...previousState.notes,note]};
    });
  }

  handleRemoveNote(e){
    let id = e.target.id;
    this.setState({notes: this.state.notes.filter( note => note.id !== id)});
  }

  //======================
  // Hooks
  //======================

  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <NoteList notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}/>
      </div>
    );

  }
}

export default Dashboard;
