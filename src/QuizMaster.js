import ovlett1 from './ovlett1.json'
import ovlett2 from './ovlett2.json'
import ovlett3 from './ovlett3.json'

class QuizMaster {
	constructor(ovlett1, ovlett2) {
		this.ovlett1 = ovlett1;

		this.ovlett2 = ovlett2;

		this.ovlett3 = ovlett3

		this.questions = [...ovlett1, ...ovlett2, ...ovlett3];

		this.exordium = this.questions.filter(q => q.label.startsWith('4.1'))
		this.narratio = this.questions.filter(q => q.label.startsWith('4.2'))
		this.argumentatio = this.questions.filter(q => q.label.startsWith('4.5'))
		this.peroratio = this.questions.filter(q => q.label.startsWith('4.6'))

		this.currentIndex = 0;

		this.selectedQuestions = []
		
		this.selectedGroups = [0]
	}

	getParts() {
		return {
			Exordium: this.exordium.map(q => q.label),
			Narratio: this.narratio.map(q => q.label),
			Argumentatio: this.argumentatio.map(q => q.label),
			Peroratio: this.peroratio.map(q => q.label),
		}
	}

	shuffleArray(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	  
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
	  
		  // And swap it with the current element.
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
	  
		return array;
	}

	setSelectedGroup(selectedGroups, shuffle) {
		this.selectedQuestions = []
		for(let key of selectedGroups) {
			let label = key.split(':')[0]
			let index = key.split(':')[1]

			this.selectedQuestions.push(...this[label.toLowerCase()][index].translations)
		}

		this.order = this.selectedQuestions.map((_, index) => index)

		if(shuffle) this.order = this.shuffleArray(this.order)

		this.shuffle = shuffle;
		this.selectedGroups = selectedGroups
		this.currentIndex = -1
	}
	
	newQuestion() {

		this.currentIndex++

		if(this.currentIndex >= this.selectedQuestions.length) {
			if(this.shuffle) this.order = this.shuffleArray(this.order)
			this.currentIndex = 0
		}

	}
	getQuestion() {
		return {
			latin: {
				before: this.selectedQuestions[this.order[this.currentIndex]-1] && this.selectedQuestions[this.order[this.currentIndex]-1][0],
				question: this.selectedQuestions[this.order[this.currentIndex]][0],
				after: this.selectedQuestions[this.order[this.currentIndex]+1] && this.selectedQuestions[this.order[this.currentIndex]+1][0]
			},
			dutch: this.selectedQuestions[this.currentIndex][1],
			index: this.currentIndex
		}
	}
	getDutch() {
		return this.questions[this.currentIndex][1]
	}
}

export default (new QuizMaster(ovlett1, ovlett2))

