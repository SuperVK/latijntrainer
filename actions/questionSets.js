import { START_QUESTIONS, STOP_QUESTIONS, SET_CHECKED } from '.'
import quizMaster from '../src/QuizMaster'

export const startQuestionSet = (checked, shuffle) => {
	quizMaster.setSelectedGroup(checked, shuffle)

	quizMaster.newQuestion()

	let question = quizMaster.getQuestion()

	return {
		type: START_QUESTIONS,
		question
	}
}

export const stopQuestionSet = () => {
	return {
		type: STOP_QUESTIONS
	}
}

export const setChecked = (checked) => {
	return {
		type: SET_CHECKED,
		checked
	}
}
