import { Button } from '@material-ui/core'

const ShowTranslation = ({ visibility, onClick }) => (
	<Button size="small" variant="contained" onClick={onClick}>
		{visibility == 'VISIBLE' ? 'Verberg vertaling' : 'Toon vertaling'}
	</Button>
)



export default ShowTranslation;
