import React from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css"
const getClassName = (className, isActive) => {
  if (!isActive) return className;
  return `${className} ${className}-active`;
};

const Dropzone = ({ onDrop, accept, title }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
      <div className={getClassName("dropzone", isDragActive)} {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
              <p className="dropzone-content">Release to drop the files here</p>
          ) : (
              <p className="dropzone-content">
                {title}
              </p>
          )}
        </div>
      </div>
  );
};

export default Dropzone;
