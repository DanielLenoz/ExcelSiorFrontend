"use client";
import { useState } from "react";
import { FileUpload } from "../aceternityUI/file-upload";

export function FileUploadDemo() {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
    console.log(files);
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg  bg-white ">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
