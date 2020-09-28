import TextDisplay from './LatinText'
import DutchInput from './DutchInput'
import ShowTranslation from './ShowTranslation'
import NextQuestion from './NextQuestion'
import DutchTranslation from './DutchTranslation'
import CheckAnswer from './CheckAnswer'

import React, { useState } from 'react'

import { Divider } from '@material-ui/core'

import { connect } from 'react-redux'

import styles from '../../styles/Flashcards.module.css'

const Flashcard = ({ question, onNextQuestion }) => {

	const [visibility, setVisibility] = useState('INVISIBLE')

	const [dutchInput, setDutchInput] = useState('')


	return <div className={styles.Flashcards}>
		<div style={{height: '10px'}}></div>
		<div className={styles.HeaderText}>Latijnse tekst:</div>
		<div style={{height: '5px'}}></div>
		<TextDisplay latin={{before: question.latin.before, question: question.latin.question, after: question.latin.after}}/>
		<div style={{height: '10px'}}></div>
		<Divider/>
		<div style={{height: '10px'}}></div>
		<div className={styles.HeaderText}>Nederlandse tekst:</div>
		<div style={{height: '10px'}}></div>
		<div className={styles.DutchTranslation}>{
			visibility == 'INVISIBLE' 
			? <DutchInput value={dutchInput} onChange={setDutchInput}/> 
			: <DutchTranslation visibility={visibility} userInput={dutchInput} dutchTranslation={question.dutch}/>
		}</div>
		<div style={{height: '20px'}}></div>
		<div>
			<NextQuestion onClick={() => {
				onNextQuestion()
				setVisibility('INVISIBLE')
				setDutchInput('')
			}}/>
			{visibility != 'COMPARE' ? <ShowTranslation visibility={visibility} onClick={setVisibility}/> : null}
			{visibility != 'COMPARE' ? <CheckAnswer onCheckAnswer={() => setVisibility('COMPARE')}></CheckAnswer> : null}
		</div>
	</div>
}

export default Flashcard

