import React from 'react'

/*
	Sidebar element showing a list of Notes
		given in props.notes
	and a button to create a new note
*/
const NotesSidebar = ({notes}) => {
	return (
		<div id="notes-list-sidebar">
			<div id="notes-list-sidebar-container">
				{notes.forEach(function(note) {
					return <NoteSidebarRow data-source={note} />
				})}
			</div>
			<div>
				<button className="rounded">New Note</button>
			</div>
		</div>
	);
}

export default NotesSidebar
