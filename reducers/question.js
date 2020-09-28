import { START_QUESTIONS, NEW_QUESTION, TOGGLE_DUTCH } from '../actions'

export default function question(state = {}, action) {
	const { type, question } = action
	switch (type) {
		case START_QUESTIONS:
		case NEW_QUESTION:
			return {
				...state,
				latin: question.latin,
				dutch: question.dutch
			}
		default:
			return state
	}
}
