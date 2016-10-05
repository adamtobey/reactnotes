import React from 'react'

/*
	Editor for a single note given in
		props.editing
	with an inline text editor, a title editor, and a save button
*/
/*
export default class NotesEditor extends React.Component {

	constructor({editing}) {
		super()
		this.state = {
			editing: editing,
			title: editing.getTitle(),
			body: editing.getBody()
		}
	}

	handleNoteTitleChange(event) {
		this.setState({title: event.target.value});
	}

	handleNoteBodyChange(event) {
	}

	sync() {
		this.state.editing.save().then(
			this.state.editing.setTitle(this.state.title)
			this.state.editing.setBody(this.state.body)
		);
	}

	render() {
		return (
			<div id="note-editor">
				<input id="edit-note-title" type="text" defaultValue={this.state.title} 
					onChange={this.handleNoteTitleChange.bind(this)}/>
				<textarea id="edit-node-body"
					onChange={this.handleNoteBodyChange.bind(this)}
					defaultValue={this.state.body} />
			</div>
		)
	}

}
*/

const NotesEditor = ({editing}) => (
	<div id="note-editor">
		<input className="rounded" id="edit-note-title" type="text" 
			defaultValue={editing.getTitle()} 
			onChange={ 
				event => editing.setTitle(event.target.value)
			}/>
		<textarea className="rounded" id="edit-node-body"
			defaultValue={editing.getBody()}
			onChange={
				event => editing.setBody(event.target.value)
			} />
	</div>
)
export default NotesEditor
