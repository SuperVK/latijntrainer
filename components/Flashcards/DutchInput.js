import { TextField } from '@material-ui/core'
import styles from '../../styles/DutchInput.module.css'

const DutchInput = ({ value, onChange }) => (
	<TextField className={styles.DutchInput} id="outlined-basic" label="Vul de Nederlandse text in...." variant="outlined" value={value} onChange={e => onChange(e.target.value)} />
)
export default DutchInput
