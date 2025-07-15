"use client";
import { useState } from "react";
import { FileUpload } from "../aceternityUI/file-upload";

declare global {
  interface Window {
    uploadedFiles?: File[];
  }
}

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    window.uploadedFiles = files; // Guardar en window para acceso global temporal
    console.log(files);
  };
  console.log(files);
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg bg-white">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
