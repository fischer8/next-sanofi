export default async function verify(uf, crm) {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}${uf}&q=${crm}${process.env.NEXT_PUBLIC_API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.item[0]?.situacao)
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}


