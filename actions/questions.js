import { TOGGLE_DUTCH, NEW_QUESTION } from '.'
import quizMaster from '../src/QuizMaster'

export const toggleDutch = () => {
	let dutch = quizMaster.getDutch()

	return {
		type: TOGGLE_DUTCH,
		dutch
	}
}

export const checkDutch = () => {
	let dutch = quizMaster.getDutch()

	return {
		type: CHECK_DUTCH,
		dutch
	}
}

export const nextQuestion = () => {
	console.log('damn2')
	quizMaster.newQuestion()

	let question = quizMaster.getQuestion()
	return {
		type: NEW_QUESTION,
		question
	}
}
