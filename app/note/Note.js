class Note {

	setTitle(title) {
		this.title = title
	}

	getTitle() {
		// TODO
		return this.title || "No Title"
	}

	setBody(body) {
		this.body = body
	}

	getBody() {
		return this.body || "No Body"
	}

}

export default Note
