import React, { useEffect, useState }from 'react'
import Post from './Post/index'

const Posts = ({postsFunction}) => {
    const [appState, setAppState] = useState({
        loading: false,
        posts: [],
    })

    useEffect(() => {
        setAppState({...appState, loading: true});
        postsFunction()
            .then((data) => {
                setAppState({...appState, loading: false, posts: data})
            });

        
    }, [setAppState]);

    
    return(
        <>
            { 
                appState.posts.map((post, index) => {
                    return (<Post key={index} post={post}/>);
                })
            }
        </>
    );
}

export default Posts