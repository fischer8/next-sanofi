"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Cookies from 'js-cookie';
import verify from '@/components/Api/api';
import states from '@/components/states';
import { AuthInfo } from '@/components/types';

export default function Terms() {
  const [info, setInfo] = useState<AuthInfo>({ crm: 0, uf: "AC" });
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
      Cookies.set("WebTEV", `${info.crm}-${info.uf}`, { expires: 1 });
      router.push("/menu");
    } else {
      alert("CRM ou UF inválido");
    }
  }

  return (
    <main className="md:min-h-screen text-center text-black md:bg-white md:flex md:items-center md:justify-center">
      <section className="bg-white absolute top-0 bottom-0 md:static md:border md:rounded-lg md:shadow-lg flex flex-col justify-center py-12 px-6 md:px-2 w-full md:w-1/2">
        <Image
          alt='logo sanofi'
          src='/sanofi-logo.png'
          width={200}
          height={300}
          className='mx-auto'
        />
        <h1 className="text-2xl font-bold mb-4">
          WebTEV
        </h1>
        <p className="text-gray-600 mb-6 md:w-5/6 md:mx-auto">
          As infomações contidas neste site são direcionadas <b>exclusivamente ao profissional de saúde</b> autorizado a prescrever ou dispensar medicamentos no Brasil.
          O WebTEV auxilia médicos, enfermeiros, farmacêuticos e outros profissionais de saúde qualificados e fornece conhecimento especializado e recursos relevantes para apoiar suas práticas clínicas.
        </p>
        <form onSubmit={handleSubmit} className='text-black mx-auto '>
          <section className="flex justify-center items-center">
            <section className="w-2/6">
              <label className="me-1 font-bold" htmlFor="crm">CRM</label>
              <input className="mb-5 border ps-1 w-7/12" required id='crm' type="number" onChange={handleChange} value={info.crm === 0 ? '' : info.crm} />
            </section>
            <section className="w-2/6" >
              <label className="me-1 font-bold" htmlFor="uf">UF</label>
              <select className="rounded p-1 cursor-pointer border mb-5" onChange={handleChange} value={info.uf} required id="uf">
                {states.map((state) => <option value={state} key={state}>{state}</option>)}
              </select>
            </section>
          </section>
          <button type='submit' className="bg-purple-600 hover:bg-purple-800 text-white py-1 px-10 rounded">
            Aceitar
          </button>
        </form>
      </section>
    </main>
  );
}

