import React, { useState} from "react";

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64';


const Form = ({updateFilesCb,...otherProps}) => {
	const [postData, setPostData] = useState({title:'', selectedFile:'', imageURL: null})
	const classes = useStyles();

    const handleOnDone = (data) => {
        console.log(data.file);
        const url = URL.createObjectURL(data.file);
        setPostData({...postData, imageURL: url})
        console.log(url);
    }

	return(
        <Paper className={classes.paper}>
            <Typography variant='h3' align='center'>Upload A Photo</Typography>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={updateFilesCb}>
                <TextField 
                    name="Title" 
                    variant='outlined' 
                    label='Title' 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />


                <img src={postData.imageURL} alt={postData.title} width='100%'/>



                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={handleOnDone}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

            </form>

        </Paper>
)}


export default Form;