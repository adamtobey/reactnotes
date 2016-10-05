import React from 'react'

/*
	Row entry in the NotesSidebar displaying one note
		given in props.source
	with title. Edits the note on click
*/
const NoteSidebarRow = ({source}) => {
	let title = source.getTitle()
	|| (
		<i>Untitled</i>
	)
	<div>
		{title}
	<div>
}

export default NotesSidebarRow
