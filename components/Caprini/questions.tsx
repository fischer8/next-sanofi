//1 ponto
const a1 = 'Idade entre 41 anos e 60 anos'
const a2 = 'Cirurgia de grande porte (menos de 1 mês)'
const a3 = 'Obesidade (IMC > 25)'
const a4 = 'Varizes de mebros inferiores'
const a5 = 'História de doença intestinal inflamatória'
const a6 = 'Sepse (menos de 1 mês)'
const a7 = 'Gravidez ou pós-parto (menos de 1 mês)'
const a8 = 'Doença pulmonar grave incluindo pneumonia (menos de 1 mês)'
const a9 = 'Edema recorrente de membros inferiores'
const a10 = 'Infarto agudo do miocárdio'
const a11 = 'Insulficiência cardíaca congestiva (menos de 1 mês)'
const a12 = 'Doença pulmonar obstrutiva crônica'
const a13 = 'Perda fetal/Aborto'
const a14 = 'Uso de anticoncepcional ou terapia de reposição hormonal'

//2 pontos
const a15 = 'Idade entre 61 anos a 74 anos'
const a16 = 'Cirurgia de artroscopia'
const a17 = 'Cirurgia de grande porte (>45 minutos)'
const a18 = 'Cirurgia laparoscópica (>45 minutos)'
const a19 = 'Câncer'
const a20 = 'Paciente confinado ao leito (>72 horas)'
const a21 = 'Imobilização do membro (gesso/tala <1 mês)'
const a22 = 'Acesso central venoso'

//3 pontos
const a23 = 'Idade acima de 75 anos'
const a24 = 'História prévia de trombose venosa ou embolia pulmonar. Histórico familiar de trombose'
const a25 = 'Fator V de leiden positivo'
const a26 = 'Protrombina 20210 A positivo'
const a27 = 'Anticoagulante lúpico positivo'
const a28 = 'Homocisteína sérica elevada'
const a29 = 'Anticorpos anticardiolipinas elevados'
const a30 = 'Trombocitopenia induzida por heparina'
const a31 = 'Trombofilia congênita ou adquirida'

//5 pontos
const a32 = 'Acidente vascular cerebral AVC (menos de 1 mês)'
const a33 = 'Artroplatia de membros inferiores'
const a34 = 'Fratura de pelve, coxa ou perna'
const a35 = 'Politrauma (menos de 1 mês)'
const a36 = 'Lesão medular - paralisia (menos de 1 mês)'

const ask1 = {
  v: 1,
  ask: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14]
}

const ask2 = {
  v: 2,
  ask: [a15, a16, a17, a18, a19, a20, a21, a22]
}

const ask3 = {
  v: 3,
  ask: [a23, a24, a25, a26, a27, a28, a29, a30, a31]
}

const ask5 = {
  v: 5,
  ask: [a32, a33, a34, a35, a36]
}

const questions = [ask1, ask2, ask3, ask5]

const mapQuestions = questions.map(({ v, ask }, i1) => (ask.map((a, i2) => ({ id: `${i1}-${i2}`, ask: a, value: v }))))

const [q1, q2, q3, q5] = mapQuestions;

const allQuestions = [...q1, ...q2, ...q3, ...q5];

export default allQuestions;
