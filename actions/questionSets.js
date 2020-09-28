import { START_QUESTIONS, STOP_QUESTIONS } from '.'
import quizMaster from '../src/QuizMaster'

export const startQuestionSet = (checked) => {
	quizMaster.setSelectedGroup(checked)

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
