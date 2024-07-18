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

    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
      floatPrecision: 16, // or "smart", can improve the output of numbers
    });

    const font = atob(base64Font);
    doc.addFileToVFS("TaipeiSans.ttf", font);
    doc.addFont("TaipeiSans.ttf", "TaipeiSans", "normal");

    doc.setFont("TaipeiSans");
    doc.setLanguage("zh-TW"); // 設置為繁體中文

    // 添加標題
    doc.setFontSize(20);
    doc.text("測驗答案", 105, 20, { align: "center" });

    // 添加日期
    const today = new Date().toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.setFontSize(12);
    doc.text(`日期：${today}`, 20, 30);

    // 使用 autoTable 生成表格
    (doc as any).autoTable({
      startY: 40,
      head: [["問題號", "答案"]],
      body: answers.map((answer, index) => [index + 1, answer]),
      styles: { font: "TaipeiSans", fontStyle: "normal" },
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 14 },
      bodyStyles: { textColor: 0, fontSize: 12 },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      margin: { top: 40 },
    });

    // 添加頁碼
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(
        `第 ${i} 頁，共 ${pageCount} 頁`,
        105,
        doc.internal.pageSize.height - 10,
        { align: "center" }
      );
    }

    doc.save("測驗答案.pdf");
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
