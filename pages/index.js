import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/core/styles'

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2979ff',
      contrastText: '#000',
    },
  },
});

import { startQuestionSet } from '../actions/questionSets'

import styles from '../styles/Home.module.css'

import FlashcardContainer from '../containers/FlashcardContainer'
import StartMenu from '../components/StartMenu/StartMenu'


const App = ({ questionSet, startQuestionSet }) => {
	return (
	<ThemeProvider theme={theme}>
		<AppBar position="static" style={theme}>
			<Toolbar>
				<Typography variant="h6">
				Latijn
				</Typography>
			</Toolbar>
		</AppBar>
		<div className={styles.Content}>
			{questionSet.started ? <FlashcardContainer/> : <StartMenu start={startQuestionSet}/>}
		</div>

	</ThemeProvider>

)}


export default connect(
	({ questionSet }) => ({ questionSet }),
	{ startQuestionSet }
)(App)