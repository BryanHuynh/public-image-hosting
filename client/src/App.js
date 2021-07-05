import React, { useState, useEffect} from "react";
import { getPosts, createPosts} from './actions/posts';
import { Container, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form'
import Posts from './components/Posts/index'
const App = () => {
	const updateUploadedFiles = (postData) =>{
		delete postData.imageURL;
		createPosts(postData);
	}

	const getPostFromDB = async() => {
		 return await getPosts();
	}


	return (
		<div>
		<Container maxWidth={false} >
			<Grow in> 
				<Grid container justify='space-between' align-items="stretch" spacing={0}>
				<Grid item xs={12} sm={7}>
					<Posts postsFunction={getPostFromDB}/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Form parentPostData={updateUploadedFiles}/>
				</Grid>
				</Grid>
			</Grow>

		</Container>

		</div>
	);
}

export default App;