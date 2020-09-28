import { Button } from '@material-ui/core'

const StartButton = ({ onClick, disabled }) => (
	<Button size="large" disabled={disabled} variant="contained" onClick={onClick}>
  	Start
	</Button>
)

export default StartButton
