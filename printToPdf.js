const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

async function createOrAppendPDF(text) {
  let pdfDoc;
  if (fs.existsSync("example.pdf")) {
    pdfDoc = await PDFDocument.load(fs.readFileSync("example.pdf"));
  } else {
    pdfDoc = await PDFDocument.create();
  }
  const page = pdfDoc.addPage();
  page.drawText(text, { x: 50, y: 900 });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("example.pdf", pdfBytes, { flag: "a" });
}

createOrAppendPDF().catch((err) => console.log(err));

module.exports = createOrAppendPDF;
