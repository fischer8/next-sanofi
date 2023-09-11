import { jsPDF } from 'jspdf';

export default function pdfHeader(risk: { id: number, risk: string }, score: number) {
  let description: string[] = [];
  if (risk.id === 0) {
    description = ['Deambulação precoce.']
  }
  if (risk.id === 1) {
    description = ['Profilaxia mecânica (CPI).']
  }
  if (risk.id === 2) {
    description = ['Profilaxia farmacológica (HNF ou HBPM).']
  }
  if (risk.id === 3) {
    description = ['Profilaxia farmacológica (HNF ou HBPM).', 'Profilaxia mecânica (CPI ou meias antitrombo).', ' ', 'Pacientes de alto risco submetidos à cirurgia oncológica', 'abdominal e pélvica: estender a profilaxia por 4 semanas.']
  }

  const capriniDescription = [
    'Este escore foi determinado por um algoritmo desenvolvido', 
    'pelo Dr. Victor F. Caprini.',
    ' ',
    'Para chegar nesse resultado é levado em consideração',
    'uma série de fatores de risco que podem aumentar a',
    'probabilidade de uma pessoa desenvolver TVP.',
  ]

  var doc = new jsPDF();
  const dateTime = new Date().toLocaleString('pt-BR', { hour12: false }).split(', ');
  doc.addImage('/sanofi-sm-lg.png', 176, 7, 20, 6);
  doc.setFontSize(14);
  doc.text(dateTime[0], 14, 12);
  doc.line(0, 22, 225, 22);
  doc.setFontSize(16);
  doc.text(`Escore ${score}`, 14, 40);
  doc.setFontSize(18);
  doc.text(risk.risk, 14, 50)
  doc.setFontSize(16);
  doc.text('Recomendações', 14, 70);
  doc.setFontSize(14);
  doc.text(description, 14, 80);
  doc.setFontSize(16);
  doc.text('Sobre', 14, 125)
  doc.setFontSize(13);
  doc.text(capriniDescription, 14, 135)
  doc.save(`WebTEV-${dateTime[0]}`)
}

