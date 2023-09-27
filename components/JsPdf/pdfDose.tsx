
import { jsPDF } from 'jspdf';

export default function pdfDose(medicine: any) {
  const doseDescription = [
    'O cálculo de dose para o tratamento do tromboembolismo,',
    'é uma parte crítica do manejo clínico dessa condição.',
    ' ',
    'O tratamento envolve anticoagulantes, que são medicamentos',
    'que afinam o sangue e impedem a formação de novos coágulos.',
    ' ',
    'O cálculo da dose correta é fundamental para evitar ',
    'hemorragias ou subtratamento.'
  ]

  var doc = new jsPDF();
  const dateTime = new Date().toLocaleString('pt-BR', { hour12: false }).split(', ');
  doc.addImage('/sanofi-sm-lg.png', 176, 7, 20, 6);
  doc.setFontSize(14);
  doc.text(dateTime[0], 14, 12);
  doc.line(0, 22, 225, 22);
  doc.setFontSize(16);
  doc.text('Dose para o tratamento do Tromboembolismo:', 14, 40);
  doc.setFontSize(14);
  doc.text(`${medicine.name} - ${medicine.dose}mg - ${medicine.freq}`, 27, 56)
  doc.rect(20, 45, 90, 20);
  doc.setFontSize(16);
  doc.text('Sobre', 14, 90)
  doc.setFontSize(13);
  doc.text(doseDescription, 14, 100)
  doc.save(`WebTEV-dose-${dateTime[0]}`)
}

