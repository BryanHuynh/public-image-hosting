import React, { useState } from "react";
import { getPosts, createPosts} from './actions/posts';
import { Container, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form'
import { createPost } from "./api";
function App() {

	getPosts().then((data) => {console.log(data)});

	const updateUploadedFiles = (postData) =>{
		delete postData.imageURL;
		createPosts(postData);
	}



	return (
		<div>
		<Container maxWidth={false} >
			<Grow in> 
				<Grid container justify='space-between' align-items="stretch" spacing={0}>
				<Grid item xs={12} sm={7}>

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