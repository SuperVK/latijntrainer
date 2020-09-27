import { START_QUESTIONS } from '.'
import quizMaster from '../src/QuizMaster'

export const startQuestionSet = () => {
	quizMaster.newQuestion()

	let question = quizMaster.getQuestion()

	return {
		type: START_QUESTIONS,
		question
	}
}
