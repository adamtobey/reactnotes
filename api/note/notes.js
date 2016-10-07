let express = require('express')
let app = express()

import Note from 'Note.js'

/*
	Collection: notes
		get: get a list of the notes in JSON
			[?limit]: limit on the number of notes returned
			[?from]: the note to start with
				Use these parameters for pagination or async loading
		post: add a new note to the database
*/
app.route('/notes')
	.get((req, res) =>
		let query = Note.find({})
			.skip(req.query.from || 0)
		if (req.query.limit) query = query.limit(req.query.limit)
		query.exec((err, notes) =>
			if (err) return res.status(404).json({error: "No notes found."})

			return res.json(notes)))
	.post((req, res) =>
		let note = new Note(req.body)
		if (note)
			note.validate(error =>
				if (error) return res.status(409).json(error)
	
				return res.sendStatus(200))
		
		else return res.status(400).json({error: "Post data is not a complete note"}))

/*
	Document: Note	see Note.js
		get: get the single note with id :note
		put: update the single note with id :note, if valid
*/
app.route('/notes/:note')
	.get((req, res) =>
		Note.findOne({_id: req.params.note}).lean()
			.exec((err, note) =>
				if (err || !note) return res.status(404).json({error: "No note found."})

				res.json(note)))
	.put((req, res) =>
		Note.findOne({_id: req.params.note})
			.exec((err, note) =>
				if (note) 
					note.validate(error =>
						if (error) return res.status(409).json(error)

						note.save(error =>
							if (error) return res.status(409).json(error)
							return res.sendStatus(200)))
	
				else return res.status(404).json({error: "No note found."})))
