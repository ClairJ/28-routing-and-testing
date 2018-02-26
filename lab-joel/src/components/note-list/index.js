import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note, index) =>
            <li key={index}>
              <NoteItem note={note}
                handleRemoveNote={this.props.handleRemoveNote}/>
            </li>
          )
        }
      </ul>
    );
  }
}

export default NoteList;
