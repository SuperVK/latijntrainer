import questions from './latijn.json'

class QuizMaster {
	constructor(questions) {
		this.questions = questions

		this.currentIndex

		this.selectedQuestions = []
		
		this.selectedGroups = [0]
	}

	getLabels() {
		return questions.map(q => q.label)
	}

	setSelectedGroup(selectedGroups) {
		this.selectedQuestions = this.questions.filter((_, index) => selectedGroups.includes(index)).map(q => q.translations).flat()

		this.selectedGroups = selectedGroups
	}

	newQuestion() {

		let wordgroupIndex = Math.floor(Math.random()*this.selectedQuestions.length)

		this.currentIndex = wordgroupIndex


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

export default (new QuizMaster(questions))

