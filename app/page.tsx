import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
  return (
      <main className="min-h-screen text-center text-black bg-white flex items-center justify-center">
        <section className="bg-white border rounded-lg shadow-lg p-12 w-5/6 md:p-12 md:w-1/2">
          <Image
            alt='sanofi'
            src='/Sanofi-2022.png'
            width={200}
            height={300}
            className='mx-auto'
          />
          <h1 className="text-2xl font-bold mb-4">
            AppTev
          </h1>
          <p className="text-gray-600 mb-9">
            As infomações contidas neste site são direcionadas <b>exclusivamente ao profissional de saúde</b> autorizado a prescrever ou dispensar medicamentos no Brasil.
            O appTev auxilia médicos, enfermeiros, farmacêuticos e outros profissionais de saúde qualificados e fornece conhecimento especializado e recursos relevantes para apoiar suas práticas clínicas.
          </p>
          <p className='mb-2'>
            Eu declaro ser um profissional médico
          </p>
          <Link href="/home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
            Aceitar
          </button>
          </Link>
        </section>
      </main>
  )
}
