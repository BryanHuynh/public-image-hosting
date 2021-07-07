import React from 'react';
import useStyles from './styles'
import { deletePost } from '../../../actions/posts'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

const Post = ({post}) => {
    const classes = useStyles();
    return(
        <>  
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() =>{deletePost(post._id)}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
            </CardActions>
        </Card>

        </>
    ) 
}

export default Post;