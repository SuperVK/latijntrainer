import React from 'react'
import styles from '../../styles/LatinText.module.css'


const LatinText = ({ latin }) => {
	return (
	<div
		className={styles.LatinText}
	>
		<span className={styles.ContextText}>{latin.before}</span>
		<span className={styles.QuestionText}> {latin.question} </span>
		<span className={styles.ContextText}>{latin.after}</span>
	</div>
)}

export default LatinText
