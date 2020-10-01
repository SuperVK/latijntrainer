import StartMenu from '../components/StartMenu/StartMenu'
import { connect } from 'react-redux'

import { startQuestionSet, setChecked } from '../actions/questionSets'

const StartMenuContainer = ({ startQuestionSet, setChecked, questionSet }) => {
		return (
		<StartMenu
            start={startQuestionSet}
            checked={questionSet.checked}
            setChecked={setChecked}
		/>
		)}

export default connect(
	({ questionSet }) => ({ questionSet }),
	{ startQuestionSet, setChecked }
)(StartMenuContainer)
