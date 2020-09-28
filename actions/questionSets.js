import { START_QUESTIONS } from '.'
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
