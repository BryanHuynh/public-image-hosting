import React, { useState, useRef} from "react";

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64';


const Form = ({updateFilesCb,...otherProps}) => {
    const fileInputField = useRef(null);
	const [postData, setPostData] = useState({title:'', selectedFile:'', imageURL: null})
	const classes = useStyles();

    const handleOnDone = (data) => {
        console.log(data.file);
        const url = URL.createObjectURL(data.file);
        setPostData({...postData, imageURL: url})
        console.log(url);
    }

    const handleClear = () => {
        setPostData({title:'', selectedFile:'', imageURL: null})
    }

	return(
        <Paper className={classes.paper}>
            <Typography variant='h3' align='center'>Upload A Photo</Typography>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={updateFilesCb}>
                <TextField 
                    name="Title" 
                    label='Title' 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                
                <img src={postData.imageURL} alt={postData.title} width='100%'/>
                
                <label className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={handleOnDone}
                    />                  
                </label>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" fullWidth onClick={handleClear}>Clear</Button>

            </form>

        </Paper>
)}


export default Form;