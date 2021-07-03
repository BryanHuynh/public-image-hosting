import React, { useState } from "react";
import { getPosts, createPosts} from './actions/posts';
import { Container, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form'
function App() {

	getPosts().then((data) => {console.log(data)});

	const [images, setImages] = useState();

	const updateUploadedFiles = (uploadedFiles) =>{
		setImages(uploadedFiles);
	}


	const onSubmit = (e) =>{
		e.preventDefault();
		console.log(images);
		createPosts(images);
	}


	return (
		<div>
		<Container maxWidth={false} >
			<Grow in> 
				<Grid container justify='space-between' align-items="stretch" spacing={0}>
				<Grid item xs={12} sm={7}>

				</Grid>
				<Grid item xs={12} sm={3}>
					<Form updateUploadedFiles={updateUploadedFiles} onSubmit={onSubmit}/>
				</Grid>
				</Grid>
			</Grow>

		</Container>

		</div>
	);
}

export default App;