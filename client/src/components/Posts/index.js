import React, { useEffect, useState }from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/index'
import useStyles from './styles'

const Posts = ({postsFunction}) => {
    const [appState, setAppState] = useState({
        loading: false,
        posts: [],
    })
    const classes = useStyles();

    useEffect(() => {
        setAppState({...appState, loading: true});
        postsFunction()
            .then((data) => {
                setAppState({...appState, loading: false, posts: data})
            });

        
    }, [setAppState]);

    
    return(

            !appState.posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {appState.posts.map((post) => (
                        <Grid key={post.id} item xs={12} sm={3}>
                            <Post post={post} />
                        </Grid>
                    ))}
                </Grid>
            )
    );
}

export default Posts