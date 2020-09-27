import StartButton from './StartButton';

const StartMenu = ({ start }) => (
	<div>
		<div style={{height: '10px'}}></div>
		<StartButton onClick={start}></StartButton>
	</div>
)

export default StartMenu

