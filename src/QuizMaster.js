import ovlett1 from './ovlett1.json'
import ovlett2 from './ovlett2.json'

class QuizMaster {
	constructor(ovlett1, ovlett2) {
		this.ovlett1 = ovlett1;

		this.ovlett2 = ovlett2;

		this.questions = [...ovlett1, ...ovlett2];

		this.currentIndex = 0;

		this.selectedQuestions = []
		
		this.selectedGroups = [0]
	}

	getLabels1() {
		return this.ovlett1.map(q => q.label)
	}

	getLabels2() {
		return this.ovlett2.map(q => q.label)
	}

	setSelectedGroup(selectedGroups) {
		this.selectedQuestions = this.questions
			.filter((_, index) => selectedGroups.includes(index))
			.map(q => q.translations)
			.flat()

		this.selectedGroups = selectedGroups
		this.currentIndex = -1
	}

	newQuestion() {

		this.currentIndex++

		if(this.currentIndex >= this.selectedQuestions.length) this.currentIndex = 0
	}
	getQuestion() {
		return {
			latin: {
				before: this.selectedQuestions[this.currentIndex-1] && this.selectedQuestions[this.currentIndex-1][0],
				question: this.selectedQuestions[this.currentIndex][0],
				after: this.selectedQuestions[this.currentIndex+1] && this.selectedQuestions[this.currentIndex+1][0]
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

