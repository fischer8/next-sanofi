"use client"
import { useState } from 'react';
import verify from '@/components/Api/api';

interface Info {
  crm: number;
  uf: string;
}

export default function Login() {
  const [info, setInfo] = useState<Info>({ crm: 0, uf: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const status = await verify(info.uf, info.crm);
    if (status === "Ativo") {
      alert(status) 
    }
  }

  return (
    <form onSubmit={handleSubmit} className='min-h-screen bg-white w-full h-full text-black'>
      <label htmlFor="crm">CRM</label>
      <input required id='crm' type="number" onChange={handleChange} value={info.crm === 0 ? '' : info.crm} />
      <label htmlFor="uf">UF</label>
      <input required id='uf' type="text" onChange={handleChange} value={info.uf} />
      <button type='submit'>
        test
      </button>
    </form>
  );
}

