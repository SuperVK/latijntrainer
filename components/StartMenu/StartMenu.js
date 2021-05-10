import React from 'react'
import StartButton from './StartButton';
import QuestionSelection from './QuestionSelection'

import styles from '../../styles/StartMenu.module.css'

import quizMaster from '../../src/QuizMaster'
let parts = quizMaster.getParts()

const StartMenu = ({ start, checked, setChecked }) => {
	
    let newHeadersChecked = []
    for(let header of Object.keys(parts)) {
        
        if(checked.filter(c => c.startsWith(header)).length == parts[header].length) newHeadersChecked.push(header)
    }

    const [headersChecked, setHeadersChecked] = React.useState(newHeadersChecked);

    const handleHeaderToggle = (value) => () => {
        const currentIndex = headersChecked.indexOf(value);
        let newHeadersChecked = [...headersChecked];

        let newChecked = [...checked];
        if (currentIndex === -1) {
            newHeadersChecked.push(value);
            
            for(let index in parts[value]) {
                if(newChecked.indexOf(`${value}:${index}`) == -1) newChecked.push(`${value}:${index}`)
            }
        } else {
            newHeadersChecked.splice(currentIndex, 1);
            newChecked = newChecked.filter(c => !c.startsWith(value))
        }
        
        setChecked(newChecked);
        setHeadersChecked(newHeadersChecked);
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        let newChecked = [...checked];
        let newHeadersChecked = [...headersChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
            if(newHeadersChecked.indexOf(value.split(':')[0]) !== -1) {
                newHeadersChecked.splice(newHeadersChecked.indexOf(value.split(':')[0]), 1);
            }
        }

        setHeadersChecked(newHeadersChecked);
        setChecked(newChecked);
    };

	return <div className={styles.StartMenu}>
		<div style={{height: '10px'}}></div>
		<QuestionSelection parts={parts} handleToggle={handleToggle} handleHeaderToggle={handleHeaderToggle} checked={checked} headersChecked={headersChecked}></QuestionSelection>
        <div className={styles.StartButtons}>
		    <StartButton disabled={checked.length == 0} onClick={() => start(checked, false)}/>
            <div style={{width: '10px'}}></div>
            <StartButton disabled={checked.length == 0} onClick={() => start(checked, true)} shuffle/>
        </div>
        <div style={{height: '20px'}}></div>
	</div>
}

export default StartMenu

