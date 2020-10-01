import { START_QUESTIONS, STOP_QUESTIONS, SET_CHECKED } from '../actions'

export default function questionSet(state = {
	started: false,
	checked: []
}, action) {
	const { type, checked } = action
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
		case SET_CHECKED:
			return {
				...state,
				checked
			}
		default:
			return state
	}
}
