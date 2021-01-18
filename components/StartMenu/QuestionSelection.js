import { List, ListItem, ListItemIcon, Checkbox, ListItemText, Grid, ListSubheader } from '@material-ui/core'

const QuestionSelection = ({labels1, labels2, handleToggle, checked}) => {
    

    return <Grid 
        container
        direction={"row"}
    >
        <List>
            <ListSubheader>OV letterlijk 1 (SE03, week 41)</ListSubheader>
            {labels1.map((label, index) => (
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
        <List>
            <ListSubheader>OV letterlijk 2 (SE05, 1 feb.)</ListSubheader>
            {labels2.map((label, index) => {
                let realindex = index+labels1.length
                return <ListItem key={realindex} button onClick={handleToggle(realindex)}>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        checked={checked.indexOf(realindex) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': label }}
                        />
                    </ListItemIcon>
                    <ListItemText id={realindex} primary={label} />
                </ListItem>
            })}
        </List>
    </Grid>

}

export default QuestionSelection