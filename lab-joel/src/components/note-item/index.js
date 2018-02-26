import React from 'react';

class NoteItem extends React.Component{
  render() {
    return(
      <div>
        <h2>{this.props.note.name}</h2>
        <p>{this.props.note.content}</p>
        <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>DELETE</button>
      </div>
    );
  }
}

export default NoteItem;
