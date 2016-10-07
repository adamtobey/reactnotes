let mongoose = require('mongoose')
let Schema = mongoose.Schema

/*
	Represents a note in the database with a title, body,
		and modified timestamp
*/
let noteSchema = new Schema({
	title: {
		type: String,
		required: [true, "Please provide a title for the note."],
		minlength: 1
	},
	body: {
		type: String,
		required: [true, "Please provide a body for the note."],
		minlength: 1
	},
	modified: { 
		type: Date, 
		default: Date.now 
	}
});

export default noteSchema
