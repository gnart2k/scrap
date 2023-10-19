const fs = require("fs");
const PDFDocument = require("pdfkit");

const inputFilePath = "./data.txt";
const outputFilePath = "./N2_Dokkai.pdf";

const doc = new PDFDocument();
doc.fontSize(22);
doc.font("./Noto_Serif_JP/NotoSerifJP-Regular.otf");
doc.pipe(fs.createWriteStream(outputFilePath));

doc.text(fs.readFileSync(inputFilePath, "utf8"));

doc.end();
