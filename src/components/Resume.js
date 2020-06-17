import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../resume.pdf";
import "../css/Resume.css";

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} />
                <Page pageNumber={2} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
