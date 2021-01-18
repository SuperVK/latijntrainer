import React from 'react'
import StartButton from './StartButton';
import QuestionSelection from './QuestionSelection'

import styles from '../../styles/StartMenu.module.css'

import quizMaster from '../../src/QuizMaster'
let labels1 = quizMaster.getLabels1()
let labels2 = quizMaster.getLabels2()


const StartMenu = ({ start, checked, setChecked }) => {
	

    // const [checked, setChecked] = React.useState([]);

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
		<QuestionSelection labels1={labels1} labels2={labels2} handleToggle={handleToggle} checked={checked}></QuestionSelection>
		<StartButton disabled={checked.length == 0} onClick={() => start(checked)}></StartButton>
	</div>
}

export default StartMenu

