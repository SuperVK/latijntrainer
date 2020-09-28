import { List, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core'

const QuestionSelection = ({labels, handleToggle, checked}) => {
    

    return <List>
        {labels.map((label, index) => (
            <ListItem key={index} button onClick={handleToggle(index)}>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': label }}
                    />
                </ListItemIcon>
                <ListItemText id={index} primary={label} />
            </ListItem>
        ))}
    </List>

}

export default QuestionSelection