import React from 'react';
import Dropzone from 'react-dropzone'
import classes from './FileZoneUpLoad.module.css'
class FileZoneUpLoad extends React.Component {

    onDropHandler(files) {
        let file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            let base64Data = reader.result;
            console.log(base64Data);
        };
    }

    render() {
        return (
            <Dropzone onDrop={acceptedFiles => this.onDropHandler(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>

                            <input {...getInputProps()} />
                            <p className={classes.content}>Drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        )
    }

}

export default FileZoneUpLoad;