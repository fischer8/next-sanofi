import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
  return (
    <main className="min-h-screen text-center text-black bg-white flex items-center justify-center">
      <section className="bg-white absolute top-0 bottom-0 md:static md:border md:rounded-lg md:shadow-lg flex flex-col justify-center p-6 w-5/6 md:p-12 md:w-1/2">
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
        <p className="text-gray-600 mb-6 md:mb-9">
          As infomações contidas neste site são direcionadas <b>exclusivamente ao profissional de saúde</b> autorizado a prescrever ou dispensar medicamentos no Brasil.
          O WebTEV auxilia médicos, enfermeiros, farmacêuticos e outros profissionais de saúde qualificados e fornece conhecimento especializado e recursos relevantes para apoiar suas práticas clínicas.
        </p>
        <p className='mb-2'>
          Eu declaro ser um profissional médico
        </p>
        <Link href="/menu">
          <button className="bg-purple-700 hover:bg-purple-900 text-white py-1 px-6 md:px-4 rounded">
            Aceitar
          </button>
        </Link>
      </section>
    </main>
  )
}
