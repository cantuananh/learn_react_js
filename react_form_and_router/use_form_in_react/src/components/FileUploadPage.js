import React, {useState} from "react";

function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [filePicked, setFilePicked] = useState(false);

    const handlePickFile = (event) => {
        setSelectedFile(event.target.files[0]);
        setFilePicked(true);
    }

    const handleSubmission = (event) => {}

    return (
        <div>
            <input type="file" name="file" onChange={handlePickFile} />
            {filePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );


}

export default FileUploadPage;