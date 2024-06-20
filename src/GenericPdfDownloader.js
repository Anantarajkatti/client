// import React from 'react';
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

//     const downloadPdfDocument = () => {
//         const input = document.getElementById(rootElementId);
//         html2canvas(input)
//             .then((canvas) => {
//                 const imgData = canvas.toDataURL('image/png');
//                 const pdf = new jsPDF();
//                 pdf.addImage(imgData, 'JPEG', 0, 0);
//                 pdf.save(`${downloadFileName}.pdf`);
//             })
//     }

//     return <button onClick={downloadPdfDocument}>Download Pdf</button>

// }

// export default GenericPdfDownloader;

import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgWidth = 595.28;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 841.89;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 841.89;
      }

      pdf.save(`${downloadFileName}.pdf`);
    });
  };

  return <div className='flex justify-center'><button className='border-2 border-tertiary text-black px-10 py-3 rounded' onClick={downloadPdfDocument}>Download Pdf</button></div>
};

export default GenericPdfDownloader;