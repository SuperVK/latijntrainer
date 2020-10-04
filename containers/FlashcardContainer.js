import Flashcard from '../components/Flashcards/Flashcard'
import { connect } from 'react-redux'

import { nextQuestion, sameQuestion } from '../actions/questions'

const FlashcardContainer = ({ question, nextQuestion, sameQuestion }) => {
		return (
		<Flashcard
			onNextQuestion={nextQuestion}
			onSameQuestion={sameQuestion}
			question={question}
		/>
		)}

export default connect(
	({ question }) => ({ question }),
	{ nextQuestion, sameQuestion }
)(FlashcardContainer)
