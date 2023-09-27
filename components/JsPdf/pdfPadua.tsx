import { jsPDF } from 'jspdf';

export default function pdfPadua(risk: { id: number, risk: string }, score: number) {
  let description: string[] = [];
  if (risk.id === 0) {
    description = ['Deambulação precoce.']
  }
  if (risk.id === 2) {
    description = ['Para pacientes com baixo risco de TEV, recomenda-se contra', 'o uso de tromboprofilaxia farmacológica ou mecânica']
  }
  if (risk.id === 3) {
    description = ['Tromboprofilaxia farmacológica com HBPM.', 'HNF (de 12-12h ou 8-8h) ou fondaparina.']
  }

  const capriniDescription = [
    'Esse modelo de avaliação, chamado escore de Padua, foi criado',
    'a partir de uma modificação substancial do modelo de Kucher.',
    ' ',
    'Assim, com essa reorganização, o modelo compreende todas',
    'as condições que as diretrizes internacionais recomendam',
    'para a tromboprofilaxia',
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
  doc.text('Sobre', 14, 105)
  doc.setFontSize(13);
  doc.text(capriniDescription, 14, 115)
  doc.save(`WebTEV-padua-${dateTime[0]}`)
}


