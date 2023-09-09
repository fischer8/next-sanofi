import { jsPDF } from 'jspdf';

export default function pdfHeader(risk: string, score: number) {
  let description : string[] = []; 
  if (risk[6] === "B") {
    description = ['Profilaxia mecânica (CPI)']
  }
  if (risk[6] === "M") {
    description = ['Profilaxia farmacológica (HNF ou HBPM)']
  }
  if (risk[6] === "A") {
    description = ['Profilaxia farmacológica (HNF ou HBPM)', 'Profilaxia mecânica (CPI ou meias antitrombo).', ' ', 'Pacientes de alto risco submetidos à cirurgia oncológica', 'abdominal e pélvica: estender a profilaxia por 4 semanas']
  }

  var doc = new jsPDF();
  const dateTime = new Date().toLocaleString('pt-BR', { hour12: false }).split(', ');
  doc.addImage('/sanofi-sm-lg.png', 11, 6, 20, 6);
  doc.setFontSize(14);
  doc.text('AppTev', 33, 11);
  doc.text(`${dateTime[0]} ${dateTime[1]}`, 155, 12);
  doc.line(10, 20, 200, 20);
  doc.setFontSize(17);
  doc.text(`Escore de Caprini: ${score}`, 105, 45, { align: "center" });
  doc.setFontSize(19);
  doc.text('Profilaxia', 105, 80, { align: "center" });
  doc.setFontSize(14);
  doc.text(description, 105, 90, { align: "center" });
  doc.save(`${dateTime[0]} ${dateTime[1]}-appTev`)
}

