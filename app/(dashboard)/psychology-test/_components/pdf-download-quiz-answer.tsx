"use client";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import "jspdf-autotable"; // This import is necessary to extend jsPDF with autoTable
interface PDFDownloadQuizAnswerProps {
  answers: string[];
}
export default function PDFDownloadQuizAnswer({
  answers,
}: PDFDownloadQuizAnswerProps) {
  const [base64Font, setBase64Font] = useState<string | null>(null);
  useEffect(() => {
    fetch("/api/chinese-font")
      .then((response) => response.json())
      .then((data) => setBase64Font(data.base64Font))
      .catch((error) => console.error("Error fetching the font:", error));
  }, []);

  console.log(answers, base64Font);

  const generatePDF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!base64Font) return;
    const doc = new jsPDF();
    const font = `data:application/x-font-ttf;base64,${base64Font}`;
    doc.addFileToVFS("TaipeiSans.ttf", font);
    doc.addFont("TaipeiSans.ttf", "TaipeiSans", "normal");
    doc.setFont("TaipeiSans");
    (doc as jsPDF & { autoTable }).autoTable({
      head: [["問題號", "答案"]],
      body: answers.map((answer, index) => [index + 1, answer]),
    });

    doc.save("quiz-answers.pdf");
  };

  return (
    <div className="">
      <h1>PDF 下載測驗答案</h1>
      <p>請按以下按鈕下載測驗答案。</p>
      <p>如果您有任何問題，請隨時與我們聯繫。</p>
      <div className=" justify-center mt-6 flex">
        <button
          onClick={generatePDF}
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          下載測驗答案
        </button>
      </div>
    </div>
  );
}
