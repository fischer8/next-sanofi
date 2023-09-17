"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import verify from '@/components/Api/api';
import Cookies from 'js-cookie';

interface Info {
  crm: number;
  uf: string;
}

export default function Login() {
  const [info, setInfo] = useState<Info>({ crm: 0, uf: "" });
  const router = useRouter();

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
      Cookies.set("WebTEV", "true", { expires: 1 });
      router.push("/menu");
    }
  }

  return (
    <main className="absolute w-full top-0 bottom-0 md:relative md:min-h-screen flex justify-center items-center bg-white">
      <form onSubmit={handleSubmit} className='text-black p-16 border rounded mx-auto flex flex-col justify-between '>
        <section>
          <label className="w-3/12 me-2" htmlFor="crm">CRM</label>
          <input className="mb-5 border w-7/12" required id='crm' type="number" onChange={handleChange} value={info.crm === 0 ? '' : info.crm} />
        </section>
        <section >
          <label className="w-3/12 me-4" htmlFor="uf">UF</label>
          <select className="rounded w-7/12 p-1 mb-5" onChange={handleChange} value={info.uf} required id="uf">
            <option value="SP">SP</option>
            <option value="MG">MG</option>
          </select>
        </section>
        <button className="border rounded bg-purple-500 text-white p-1 px-12 w-fit" type='submit'>
          test
        </button>
      </form>
    </main>
  );
}

