import React from 'react';
import Dropzone from 'react-dropzone'
import classes from './FileZoneUpLoad.module.css'
class FileZoneUpLoad extends React.Component {

    onDropHandler(files) {
        let file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            alert(reader.result);
            console.log(reader.result);
        };
    }

    render() {
        return (
            <Dropzone onDrop={acceptedFiles => this.onDropHandler(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>

                            <input {...getInputProps()} />
                            <p className={classes.content}>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        )
    }

}

export default FileZoneUpLoad;