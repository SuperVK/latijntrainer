import { Button } from '@material-ui/core'

const StartButton = ({ onClick }) => (
	<Button size="large" variant="contained" onClick={onClick}>
  	Start
	</Button>
)

export default StartButton
