import React from "react";
import FileBase from 'react-file-base64';

class UploadInput extends React.Component {
    constructor(){
        super();
        this.state = {
            files: []
        }
    }

    getFiles(files){
        this.setState({ files: files });
        console.log(files);
    }

    render(){
        return(
            <FileBase
            multiple={ true }
            onDone={ this.getFiles.bind(this) } />
        )
    }
}

export default UploadInput;