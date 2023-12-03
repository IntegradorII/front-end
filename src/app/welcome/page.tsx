import { Header } from '@/components/common/header'

export default function Welcome () {
  return (
    <>
      <Header />
      <section className='min-h-screen w-full pt-[80px]'>
        <main
          style={{
            backgroundImage: 'url("/images/bg1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='flex flex-col items-center gap-5 p-2 h-screen'
        >
          <ul className="flex flex-col items-start w-full h-full text-2xl text-secondary-text font-semibold gap-2 pl-10 pt-32">
            <li className="text-3xl font-bold">BENEFICIOS</li>
            <li>• Obtén una experiencia más personalizada.</li>
            <li>• Lleva un registro de tus niños y mascotas.</li>
            <li>• Visualiza las nuevas colecciones.</li>
            <li>• Guarda tu histórico de compras.</li>
            <li>• Obtén descuentos.</li>
          </ul>
        </main>
      </section>
    </>
  )
}
