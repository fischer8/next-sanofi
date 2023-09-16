"use client"
import { useState } from 'react';
import verify from '@/components/Api/api';

interface Info {
  crm: number;
  uf: string;
}

export default function Login() {
  const [info, setInfo] = useState<Info>({ crm: 0, uf: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;
    setInfo((old) => ({
      ...old,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = await verify(info.uf, info.crm);
    if (status === "Ativo") {
      alert(status)
    }
  }

  return (
    <main className="absolute w-full top-0 bottom-0 md:relative md:min-h-screen flex justify-center items-center bg-white">
      <form onSubmit={handleSubmit} className='text-black p-16 border rounded mx-auto flex flex-col justify-between'>
          <label htmlFor="crm">CRM</label>
          <input className="mb-5 border w-3/6" required id='crm' type="number" onChange={handleChange} value={info.crm === 0 ? '' : info.crm} />
          <label htmlFor="uf">UF</label>
          <select className="rounded p-1 w-3/12 mb-5" onChange={handleChange} value={info.uf} required id="uf">
            <option selected value="SP">SP</option>
            <option value="MG">MG</option>
          </select>
        <button className="border rounded bg-purple-500 text-white p-2" type='submit'>
          test
        </button>
      </form>
    </main>
  );
}

