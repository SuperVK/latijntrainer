import { List, ListItem, ListItemIcon, Checkbox, ListItemText, Grid, ListSubheader, Divider } from '@material-ui/core'

const QuestionSelection = ({parts, handleToggle, handleHeaderToggle, checked, headersChecked}) => {
    

    return <Grid 
        container
        direction={"column"}
    >
        {Object.values(parts).map((part, i) => {
            let headerTitle = Object.keys(parts)[i]
            return <List key={headerTitle+'H'}>
                <ListItem button style={{backgroundColor: "white"}} onClick={handleHeaderToggle(headerTitle)} key={headerTitle}>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        checked={headersChecked.indexOf(headerTitle) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': headerTitle }}
                        />
                    </ListItemIcon>
                    <b style={{color: '#636363'}}>
                        
                        {headerTitle}
                    </b>
                </ListItem>
                <Divider key="divider"></Divider>
                {part.map((label, index) => (
                    <ListItem key={`${headerTitle}:${index}`} button onClick={handleToggle(`${headerTitle}:${index}`)}>
                        <ListItemIcon>
                            <Checkbox
                            edge="start"
                            checked={checked.indexOf(`${headerTitle}:${index}`) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': label }}
                            />
                        </ListItemIcon>
                        <ListItemText id={`${headerTitle}:${index}`} primary={label} />
                    </ListItem>
                ))}
            </List>
        })}
        
    </Grid>

}

export default QuestionSelection