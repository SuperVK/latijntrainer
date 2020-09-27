import Flashcard from '../components/Flashcards/Flashcard'
import TextDisplay from '../components/Flashcards/LatinText'
import TextInput from '../components/Flashcards/TextInput'
import ShowTranslation from '../components/Flashcards/ShowTranslation'
import NextQuestion from '../components/Flashcards/NextQuestion'
import { connect } from 'react-redux'

import { nextQuestion, toggleDutch } from '../actions/questions'

const FlashcardContainer = ({ question, toggleDutch, nextQuestion }) => {
		return (
		<Flashcard
			onToggleDutch={toggleDutch}
			onNextQuestion={nextQuestion}
			question={question}
		/>
		)}

export default connect(
	({ question }) => ({ question }),
	{ toggleDutch, nextQuestion }
)(FlashcardContainer)
