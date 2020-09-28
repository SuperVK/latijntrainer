import { START_QUESTIONS, STOP_QUESTIONS } from '../actions'

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
		case STOP_QUESTIONS:
			return {
				...state,
				started: false
			}
		default:
			return state
	}
}
