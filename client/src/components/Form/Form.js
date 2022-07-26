import React, { useState } from 'react';
import useStyles from './styles.js';
import { TextField, Paper, Typography, Button } from '@material-ui/core'

const Form = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })

    const handleSubmit = () => {

    }

    
    return (
       <Paper className={classes.paper}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth 
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <TextField name="message" variant="outlined" label="Message" fullWidth 
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth 
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                />
                <div className={classes.fileInput} >
                    
                </div>
            </form> 
       </Paper>
    )
};
export default Form;