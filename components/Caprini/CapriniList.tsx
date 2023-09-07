import React from 'react';


export default function CapriniList({ handleScore }) : { handleScore: ReactElement<any, any> } {
  return (
    <ul className="">
      <li>
        <input className="cursor-pointer me-2" type="checkbox" onChange={() => handleScore((old) => old + 1)} id="ask-1" name="ask-1" value={1} />
        <label className="cursor-pointer" htmlFor="ask-1">Gravidez</label>
      </li>
      <li>
        <input className="cursor-pointer me-2" type="checkbox" id="ask-2" name="ask-2" value={1} />
        <label className="cursor-pointer" htmlFor="ask-2">Doença pulmonar grave (menos de 1 mês) incluindo pneumonia</label>
      </li>
      <li>
        <input className="cursor-pointer me-2" type="checkbox" id="ask-3" name="ask-3" value={1} />
        <label className="cursor-pointer" htmlFor="ask-3">Tabagista</label>
      </li>
    </ul>
  );
}

