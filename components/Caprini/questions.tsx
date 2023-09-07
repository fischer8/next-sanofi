//1 ponto
const a2 = { id: 2, ask: 'Cirurgia de grande porte (menos de 1 mês)', value: 1 }
const a3 = { id: 3, ask: 'Obesidade (IMC > 25)', value: 1 }
const a4 = { id: 4, ask: 'Varizes de mebros inferiores', value: 1 }
const a5 = { id: 5, ask: 'História de doença intestinal inflamatória', value: 1 }
const a6 = { id: 6, ask: 'Sepse (menos de 1 mês)', value: 1 }
const a7 = { id: 7, ask: 'Gravidez ou pós-parto (menos de 1 mês)', value: 1 }
const a8 = { id: 8, ask: 'Doença pulmonar grave incluindo pneumonia (menos de 1 mês)', value: 1 }
const a9 = { id: 9, ask: 'Edema recorrente de membros inferiores', value: 1 }
const a10 = { id: 10, ask: 'Infarto agudo do miocárdio', value: 1 }
const a11 = { id: 11, ask: 'Insulficiência cardíaca congestiva (menos de 1 mês)', value: 1 }
const a12 = { id: 12, ask: 'Doença pulmonar obstrutiva crônica', value: 1 }
const a13 = { id: 13, ask: 'Perda fetal/Aborto', value: 1 }
const a14 = { id: 14, ask: 'Uso de anticoncepcional ou terapia de reposição hormonal', value: 1 }
const a19 = { id: 19, ask: 'Idade entre 41 anos e 60 anos', value: 1 }

//2 pontos
const a1 = { id: 1, ask: 'Câncer', value: 2 }
const a15 = { id: 15, ask: 'Idade entre 61 anos a 74 anos', value: 2 }
const a16 = { id: 16, ask: 'Cirurgia de artroscopia', value: 2 }
const a17 = { id: 17, ask: 'Cirurgia de grande porte (>45 minutos)', value: 2 }
const a18 = { id: 18, ask: 'Cirurgia laparoscópica (>45 minutos)', value: 2 }
const a20 = { id: 20, ask: 'Paciente confinado ao leito (>72 horas)', value: 2 }
const a21 = { id: 21, ask: 'Imobilização do membro (gesso/tala <1 mês)', value: 2 }
const a22 = { id: 22, ask: 'Acesso central venoso', value: 2 }

//3 pontos
const a23 = { id: 23, ask: 'Idade acima de 75 anos', value: 3 }
const a24 = { id: 24, ask: 'História prévia de trombose venosa ou embolia pulmonar. Histórico familiar', value: 3 }
const a25 = { id: 25, ask: 'Fator V de leiden positivo', value: 3 }
const a26 = { id: 26, ask: 'Protrombina 20210 A positivo', value: 3 }
const a27 = { id: 27, ask: 'Anticoagulante lúpico positivo', value: 3 }
const a28 = { id: 28, ask: 'Homocisteína sérica elevada', value: 3 }
const a29 = { id: 29, ask: 'Anticorpos anticardiolipinas elevados', value: 3 }
const a30 = { id: 30, ask: 'Trombocitopenia induzida por heparina', value: 3 }
const a31 = { id: 31, ask: 'Trombofilia congênita ou adquirida', value: 3 }

//5 pontos
const a32 = { id: 32, ask: 'Acidente vascular cerebral AVC (menos de 1 mês)', value: 5 }
const a33 = { id: 33, ask: 'Artroplatia de membros inferiores', value: 5 }
const a34 = { id: 34, ask: 'Fratura de pelve, coxa ou perna', value: 5 }
const a35 = { id: 35, ask: 'Politrauma (menos de 1 mês)', value: 5 }
const a36 = { id: 36, ask: 'Lesão medular - paralisia (menos de 1 mês)', value: 5 }

const allQuestions = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36];


const chunk1 = allQuestions.slice(0, 12);
const chunk2 = allQuestions.slice(12, 2 * 12);
const chunk3 = allQuestions.slice(2 * 12);

const questions = [chunk1, chunk2, chunk3];

export default questions;
