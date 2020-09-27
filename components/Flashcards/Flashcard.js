import TextDisplay from './LatinText'
import TextInput from './TextInput'
import ShowTranslation from './ShowTranslation'
import NextQuestion from './NextQuestion'
import DutchTranslation from './DutchTranslation'

import { Divider } from '@material-ui/core'

import { connect } from 'react-redux'

import styles from '../../styles/Flashcards.module.css'

const Flashcard = ({ question, onToggleDutch, onNextQuestion }) => (
		<div className={styles.Flashcards}>
			<div style={{height: '10px'}}></div>
			<div className={styles.HeaderText}>Latijnse tekst:</div>
			<div style={{height: '5px'}}></div>
			<TextDisplay latin={{before: question.latin.before, question: question.latin.question, after: question.latin.after}}/>
			<div style={{height: '10px'}}></div>
			<Divider/>
			<div style={{height: '10px'}}></div>
			<div className={styles.HeaderText}>Nederlandse tekst:</div>
			<div style={{height: '10px'}}></div>
			<div className={styles.DutchTranslation}>{question.answerVisibility == 'INVISIBLE' ? <TextInput/> : <DutchTranslation dutchTranslation={question.dutch}/>}</div>
			<div style={{height: '20px'}}></div>
			<div>
				<NextQuestion onClick={onNextQuestion}/>
				<ShowTranslation visibility={question.answerVisibility} onClick={onToggleDutch}/>
			</div>
		</div>
)

export default Flashcard

