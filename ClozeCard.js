var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "... ");
	this.clozeError = function() {
		if (text.indexOf(cloze) === -1) {
			console.log("The cloze doesn't appear in the full text!");
		}
	}
}


module.exports = ClozeCard;