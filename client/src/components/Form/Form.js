import React, { useState }from 'react';
import FileUpload from '../FileUpload/FileUpload'

const Form = ({updateUploadedFiles, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <FileUpload
            accept=".jpg,.png,.jpeg"
            label=""
            multiple= {true}
            updateFilesCb={updateUploadedFiles}
            />
            <button type="submit">UPLOAD</button>
        </form>
    );

}

export default Form;

