import React from 'react';
import cvFile from '../assets/files/cv.pdf'

const DownloadPDFButton: React.FC<{label: string}> = ({ label }) => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Curriculo-Lucas-Siqueira.pdf';
    link.click();
  };

  return (
    <button onClick={downloadPDF}>{ label }</button>
  );
};

export default DownloadPDFButton;
