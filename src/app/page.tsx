export default function App () {
  return (
    <main
      style={{
        backgroundImage: 'url("/images/bg1.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='flex flex-col items-center gap-5 p-2 h-screen'
    >
      <div className="flex flex-col items-start w-full h-full text-2xl text-secondary-text font-semibold gap-2 pl-10 pt-32">
        <span className="text-4xl font-bold">BENEFICIOS</span>
        <span>• Obtén una experiencia más personalizada.</span>
        <span>• Lleva un registro de tus niños y mascotas.</span>
        <span>• Visualiza las nuevas colecciones.</span>
        <span>• Guarda tu histórico de compras.</span>
        <span>• Obtén descuentos.</span>
      </div>
    </main>
  )
}
