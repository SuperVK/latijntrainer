import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { startQuestionSet } from '../actions/questionSets'

import styles from '../styles/Home.module.css'

import FlashcardContainer from '../containers/FlashcardContainer'
import StartMenu from '../components/StartMenu'


const App = ({ questionSet, startQuestionSet }) => {
	return (
	<>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">
				Latijn
				</Typography>
			</Toolbar>
		</AppBar>
		<div className={styles.Content}>
			{questionSet.started ? <FlashcardContainer/> : <StartMenu start={startQuestionSet}/>}
		</div>

	</>
)}


export default connect(
	({ questionSet }) => ({ questionSet }),
	{ startQuestionSet }
)(App)