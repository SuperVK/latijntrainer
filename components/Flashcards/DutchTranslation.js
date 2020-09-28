const { Typography, Divider } = require("@material-ui/core");

const DutchTranslation = ({ dutchTranslation, userInput, visibility }) => (
	visibility == 'COMPARE' 
	? <div>
		{dutchTranslation}
		<div style={{height: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}><Divider></Divider></div>
		<span style={{color: '#400189'}}>{userInput}</span>
	</div>
	: <div>{dutchTranslation}</div>
)	

export default DutchTranslation
