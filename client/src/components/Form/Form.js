import React, { useState, useEffect} from "react";

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64';


const Form = ({parentPostData,...otherProps}) => {
	const [postData, setPostData] = useState({title:'', selectedFile:'', imageURL:null});
	const classes = useStyles();

    const handleOnDone = async (data) => {
        setPostData({title: updateBlankName(data.name), selectedFile: data.base64, imageURL: URL.createObjectURL(data.file)});
    }

    const updateBlankName = (newName) => {
        return postData.title === '' ? (newName) : (postData.title)
    }

    useEffect(() => {
        console.log(postData);
    });


    const handleClear = () => {
        setPostData({title:'', selectedFile:''})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        parentPostData(postData);
    }

	return(
        <Paper className={classes.paper}>
            <Typography variant='h3' align='center'>Upload A Photo</Typography>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
                <TextField 
                    name="Title" 
                    label='Title' 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                
                <img src= {postData.imageURL} alt={postData.title} width='100%'/>
                
                <label className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={handleOnDone}
                    />                  
                </label>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>
                    Submit
                </Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" fullWidth onClick={handleClear}>
                    Clear
                </Button>

            </form>

        </Paper>
)}


export default Form;