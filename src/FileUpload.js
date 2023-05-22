import React, { useState } from 'react';

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('File uploaded successfully!');
        
      } else {
        console.error('Error uploading file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
    <h1 style={{color:"#19A7CE",marginTop:"10vh"}}>Upload to Google Drive </h1>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" style={{marginTop:"20vh",padding:"10px"}}>Upload to Google Drive</button>
    </form>
    </>
    
  );
};

export default FileUploadForm;
