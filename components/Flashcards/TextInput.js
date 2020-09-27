import { TextField } from '@material-ui/core'
import styles from '../../styles/TextInput.module.css'

const TextInput = () => (
	<TextField className={styles.TextInput} id="outlined-basic" label="Vul de Nederlandse text in...." variant="outlined" />
)
export default TextInput
