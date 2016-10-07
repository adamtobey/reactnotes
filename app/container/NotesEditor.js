import React from 'react'

/*
	Editor for a single note given in
		props.editing
	with an inline text editor and a title editor
*/
const NotesEditor = ({editing}) => (
	<div id="note-editor">
		<input className="rounded" id="edit-note-title" type="text" 
			defaultValue={editing.title} 
			onChange={ 
				event => editing.title = event.target.value
			}/>
		<textarea className="rounded" id="edit-node-body"
			defaultValue={editing.body}
			onChange={
				event => editing.body = event.target.value
			} />
	</div>
)

export default NotesEditor
