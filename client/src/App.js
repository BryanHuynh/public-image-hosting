import React, { useState, useEffect} from "react";
import { getPosts, createPosts} from './actions/posts';
import { Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import Form from './components/Form/Form'
import Posts from './components/Posts/index'
import useStyles from './styles'

const App = () => {
	const classes = useStyles();

	const updateUploadedFiles = (postData) =>{
		delete postData.imageURL;
		//console.log("root:", postData)
		createPosts(postData);
	}

	const getPostFromDB = async() => {
		 return await getPosts();
	}


	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='static' color="inherit">
                <Typography className={classes.heading} variant='h2' align='center'>Public image Hosting</Typography>
            </AppBar>
			<Grow in> 
				<Grid container justify='space-between' align-items="stretch" spacing={0}>
				<Grid item xs={12} sm={8}>
					<Posts postsFunction={getPostFromDB}/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Form parentPostData={updateUploadedFiles}/>
				</Grid>
				</Grid>
			</Grow>

		</Container>

	);
}

export default App;