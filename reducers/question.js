import { START_QUESTIONS, NEW_QUESTION, TOGGLE_DUTCH } from '../actions'

export default function question(state = {}, action) {
	const { type, answerVisibility, question, dutch } = action
	switch (type) {
		case START_QUESTIONS:
		case NEW_QUESTION:
			return {
				...state,
				answerVisibility: 'INVISIBLE',
				latin: question.latin
			}
		case TOGGLE_DUTCH:
			if(state.answerVisibility == 'VISIBLE') {
				return {
					...state,
					answerVisibility: 'INVISIBLE',
					dutch
				}
			} else {
				return {
					...state,
					answerVisibility: 'VISIBLE',
					dutch
				}
			}

		default:
			return state
	}
}
