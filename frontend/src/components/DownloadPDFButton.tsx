import React from 'react';
import cvFile from '../assets/files/cv.pdf'

type DownloadPDFButtonProps = {
  label: string;
  fileName: string;
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ label, fileName }) => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = fileName;
    link.click();
  };

  return (
    <button onClick={downloadPDF}>{ label }</button>
  );
};

export default DownloadPDFButton;
