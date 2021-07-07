import React, {useEffect, useState} from 'react';
import useStyles from './styles'
import { deletePost } from '../../../actions/posts'
import {Card, CardActions, CardHeader, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'

const Post = ({post}) => {
    const classes = useStyles();
    const [postStatus, setPostStatus] = useState(true);
    const [postFile, setPostFile] = useState({});

    const handleDelete = (id) => {
        setPostStatus(false);
        deletePost(id)
    }

    const urltoFile = async(url, filename, mimeType) => {
        return await (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
    }

    const handleOnClick = () => {
        console.log(postFile)
        const url = URL.createObjectURL(postFile);
        console.log(url);
    }

    useEffect(() => {
        urltoFile(post.selectedFile, post.title, 
            post.selectedFile.substring(post.selectedFile.indexOf(':') + 1, post.selectedFile.indexOf(';'))
        ).then((file) => {setPostFile(file); console.log(Object.keys(file).length)})
    }, [setPostFile])



    const render = () => {
        //console.log(post.selectedFile)
        if(postStatus){
            return (
                <>  
                <Card className={classes.card}>
                    <CardHeader
                        title={post.title}
                        subheader={moment(post.createdAt).fromNow()}
                    />
                    {   
                        postFile
                        && Object.keys(postFile).length === 0 
                        && postFile.constructor === Object
                        ?  
                        (<>Waiting</>) : (<img src={URL.createObjectURL(postFile)} alt="image"/>)
                    }
                    <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary" onClick={() =>{handleDelete(post._id)}}>
                            <DeleteIcon fontSize="small"/>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
        
                </>
            )
        }
        return (
            <>  
            <Card className={classes.card}>
                <CardHeader
                    title={post.title}
                    subheader={moment(post.createdAt).fromNow()}
                />
                <Typography variant="h2" className={classes.deleted}> Deleted </Typography>
                <CardActions className={classes.cardActions}>
                </CardActions>
            </Card>
    
            </>
        )

    }
    return(
        render()
    ) 
}

export default Post;