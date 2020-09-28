const { Typography, Divider } = require("@material-ui/core");

const DutchTranslation = ({ dutchTranslation, userInput, visibility }) => (
	visibility == 'COMPARE' 
	? <div>
		{userInput}
		<div style={{height: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}><Divider></Divider></div>
		<span style={{color: '#400189'}}>{dutchTranslation}</span>
	</div>
	: <div style={{color: '#400189'}}>{dutchTranslation}</div>
)	

export default DutchTranslation
