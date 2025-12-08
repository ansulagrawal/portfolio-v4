import { Download, MoveLeft, MoveRight, Plus } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const [numPages, setNumPages] = useState(1);
  const [pageNo, setPageNo] = useState(1);

  function onDocumentLoadSuccess({ numPages: loadedPages }) {
    setNumPages(loadedPages);
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />

        <h2>Resume</h2>

        <div className="flex gap-3">
          {numPages > 1 && (
            <div className="flex gap-1 mr-3">
            
              <MoveLeft
                className="icon"
                onClick={() => pageNo !== 1 && setPageNo((p) => p - 1)}
              />
              <p>{pageNo}/{numPages}</p>
              <MoveRight
                className="icon"
                onClick={() => pageNo < numPages && setPageNo((p) => p + 1)}
              />
            </div>
          )}

          <a
            href="files/resume.pdf"
            download
            className="cursor-pointer"
            title="Download resume"
          >
            <Download className="icon" />
          </a>
        </div>
      </div>

      <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNo} renderAnnotationLayer renderTextLayer />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
