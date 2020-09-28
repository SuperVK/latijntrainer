import { Button } from '@material-ui/core'

const ShowTranslation = ({ visibility, onClick }) => (
	<Button size="small" variant="contained" onClick={() => visibility == 'VISIBLE' ? onClick('INVISIBLE') : onClick('VISIBLE')}>
		{visibility == 'VISIBLE' ? 'Verberg vertaling' : 'Toon vertaling'}
	</Button>
)



export default ShowTranslation;
