import { START_QUESTIONS, NEW_QUESTION, REVEAL_DUTCH } from '../actions'

export default function questionSet(state = {
	started: false
}, action) {
	const { type, answerVisibility, question } = action
	switch (type) {
		case START_QUESTIONS:
			return {
				...state,
				started: true
			}
		default:
			return state
	}
}
