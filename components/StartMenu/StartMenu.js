import React from 'react'
import StartButton from './StartButton';
import QuestionSelection from './QuestionSelection'

import styles from '../../styles/StartMenu.module.css'

import quizMaster from '../../src/QuizMaster'
let labels = quizMaster.getLabels()

const StartMenu = ({ start }) => {
	

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

	return <div className={styles.StartMenu}>
		<div style={{height: '10px'}}></div>
		<QuestionSelection labels={labels} handleToggle={handleToggle} checked={checked}></QuestionSelection>
		<StartButton onClick={() => start(checked)}></StartButton>
	</div>
}

export default StartMenu

