"use client";
import jsPDF from "jspdf";
import "jspdf-autotable"; // This import is necessary to extend jsPDF with autoTable
interface PDFDownloadQuizAnswerProps {
  answers: string[];
}

export default function PDFDownloadQuizAnswer({
  answers,
}: PDFDownloadQuizAnswerProps) {
  const generatePDF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const doc = new jsPDF();
    (doc as jsPDF & { autoTable }).autoTable({
      head: [["問題號", "答案"]],
      body: answers.map((answer, index) => [index + 1, answer]),
    });

    doc.save("quiz-answers.pdf");
  };

  return (
    <div className="p-4">
      <h1>PDF 下載測驗答案</h1>
      <p>請按以下按鈕下載測驗答案。</p>
      <p>如果您有任何問題，請隨時與我們聯繫。</p>
      <button
        onClick={generatePDF}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        下載測驗答案
      </button>
    </div>
  );
}
