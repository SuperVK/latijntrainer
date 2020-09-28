import Flashcard from '../components/Flashcards/Flashcard'
import { connect } from 'react-redux'

import { nextQuestion } from '../actions/questions'

const FlashcardContainer = ({ question, nextQuestion }) => {
		return (
		<Flashcard
			onNextQuestion={nextQuestion}
			question={question}
		/>
		)}

export default connect(
	({ question }) => ({ question }),
	{ nextQuestion }
)(FlashcardContainer)
