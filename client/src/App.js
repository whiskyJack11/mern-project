import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

const App = () => {
    const imgSrc = "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI";
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={imgSrc} alt="memories" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid conatiner justify="space-between" alignItems="stretch" spacing="3">

                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}
export default App