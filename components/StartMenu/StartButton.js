import { Button } from '@material-ui/core'

const StartButton = ({ onClick, disabled, shuffle }) => (
	<Button size="large" disabled={disabled} variant="contained" onClick={onClick}>
  	{shuffle ? 'Shuffle' : 'Start'}
	</Button>
)

export default StartButton
