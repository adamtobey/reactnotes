import React from 'react'

import NotesSidebar from './container/notes-sidebar/NotesSidebar.js'
import NotesEditor from './container/NotesEditor.js'

import Note from './note/Note.js'

/*
	Main element in the application, represents the display and state of the whole notes app.

	Begins editing the note given in
		props.editing
	or else makes a new note

	Contains the list of notes currently loaded on the frontend.
*/
export default class Notes extends React.Component {
	constructor() {
		super()
		this.setState({
			notes: []
		})
		this.editing = new Note()
	}

	/*
		Fetch the list of notes from the server and update this componenent's state
	*/
	fetchNotes() {
		// TODO
		let notes = []
		this.setState({
			notes: notes
		})
	}

	saveNotes() {

	}

	render() {
		return (
			<div id="app-container">
				<NotesSidebar notes={this.state.notes} />
				<NotesEditor editing={this.editing} />
			</div>
		)
	}
}
