const { Button } = require("@material-ui/core")

const CheckAnswer = ({ onCheckAnswer, disabled }) => {
    return <Button size="small" disabled={disabled} variant="contained" onClick={onCheckAnswer}>
        Check answer
    </Button>
}

export default CheckAnswer