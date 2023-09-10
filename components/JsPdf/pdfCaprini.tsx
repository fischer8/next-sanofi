import { jsPDF } from 'jspdf';

export default function pdfHeader(risk: { id: number, risk: string }, score: number) {
  let description: string[] = [];
  if (risk.id === 1) {
    description = ['Profilaxia mecânica (CPI).']
  }
  if (risk.id === 2) {
    description = ['Profilaxia farmacológica (HNF ou HBPM).']
  }
  if (risk.id === 3) {
    description = ['Profilaxia farmacológica (HNF ou HBPM).', 'Profilaxia mecânica (CPI ou meias antitrombo).', ' ', 'Pacientes de alto risco submetidos à cirurgia oncológica', 'abdominal e pélvica: estender a profilaxia por 4 semanas.']
  }
  if (risk.id === 0) {
    description = ['Deambulação precoce.']
  }

  var doc = new jsPDF();
  const dateTime = new Date().toLocaleString('pt-BR', { hour12: false }).split(', ');
  doc.addImage('/sanofi-sm-lg.png', 176, 7, 20, 6);
  doc.setFontSize(14);
  doc.text(`${dateTime[0]} ${dateTime[1]}`, 14, 12);
  doc.line(0, 22, 225, 22);
  doc.setFontSize(16);
  doc.text(`Escore ${score}`, 14, 40);
  doc.setFontSize(18);
  doc.text(risk.risk, 14, 50)
  doc.setFontSize(16);
  doc.text('Recomendações', 14, 70);
  doc.setFontSize(14);
  doc.text(description, 14, 80);
  doc.text('Teste stub text', 14, 115)
  doc.save(`appTEV-${dateTime[0]}`)
}

