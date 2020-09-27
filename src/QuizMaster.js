import questions4_1 from './4.1.json'

class QuizMaster {
	constructor(questions) {
		this.questions = questions

		this.currentIndex
	}

	newQuestion() {

		let wordgroupIndex = Math.floor(Math.random()*this.questions.length)

		this.currentIndex = wordgroupIndex


	}
	getQuestion() {
		return {
			latin: {
				before: this.questions[this.currentIndex-1] && this.questions[this.currentIndex-1][0],
				question: this.questions[this.currentIndex][0],
				after: this.questions[this.currentIndex+1] && this.questions[this.currentIndex+1][0]
			},
			dutchTranslation: this.questions[this.currentIndex][1],
			index: this.currentIndex
		}
	}
	getDutch() {
		return this.questions[this.currentIndex][1]
	}
}

export default (new QuizMaster(questions4_1))

