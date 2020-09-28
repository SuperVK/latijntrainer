const { Button } = require("@material-ui/core")

const CheckAnswer = ({ onCheckAnswer }) => {
    return <Button size="small" variant="contained" onClick={onCheckAnswer}>
        Check answer
    </Button>
}

export default CheckAnswer