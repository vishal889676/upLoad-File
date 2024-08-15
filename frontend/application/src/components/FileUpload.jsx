// src/FileUpload.js
import React, { useState } from "react";
import './fileUpload.css';
import { createRef } from "react";

const FileUpload = () => {
  const [results, setResults] = useState(null);
  const fileInput = createRef();
  const [isUploading, setIsUploading] = useState(false); 
  const onUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);

    setIsUploading(true);
    try {
      const responce = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const data = await responce.json();
      console.log(data);
      if (data.message === "ok") {
        setIsUploading(false);
        setResults("file uploaded successfully..");
      } else {
        setIsUploading(false);
        setResults(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onUpload}>
        <input type="file" name="avatar" ref={fileInput} />
        <button type="submit" value="Upload">
          Upload
        </button>

      </form>
      {isUploading && (
        <div >
          <div className="loader" ></div>
          <h2 >Uploading...</h2>
        </div>
      )}

      {results && <p>{results}</p>}
    </div>
  );
};

export default FileUpload;
