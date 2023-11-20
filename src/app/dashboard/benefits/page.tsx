import { TbChecks } from 'react-icons/tb'

const Benefits = () => {
  return (
    <section className='w-full h-full flex flex-col gap-8'>
      <span className='font-bold'>Beneficios por segmento</span>
      <div className="w-full h-[90%] grid grid-rows-12 rounded-3xl items-center justify-between">
        <div className="w-full bg-white grid grid-cols-7 rounded-t-3xl pt-2">
          <div className="col-span-3 font-bold benefits-item-left">Beneficios</div>
          <div className="font-bold benefits-item-center">RockStar</div>
          <div className="font-bold benefits-item-center">CoolStar</div>
          <div className="font-bold benefits-item-center">Star</div>
          <div className="font-bold benefits-item-center">New Talent</div>
        </div>
        <div className="bg-white grid grid-cols-7 border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Descuento de cumpleaños</div>
          <div className="benefits-item-center">25%</div>
          <div className="benefits-item-center">20%</div>
          <div className="benefits-item-center">20%</div>
          <div className="benefits-item-center">20%</div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Descuentos exclusivos</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Beneficios marcas aliadas</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Tres envíos gratis al año</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Comunicación personalizada</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Compra asistida por televentas</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Regalable cumpleaños</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Despacho express</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Atención prioritaria línea de atención</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray">
          <div className="col-span-3 benefits-item-left">Ingreso anticipado a eventos online</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
        <div className="bg-white grid grid-cols-7 gap-[1px] border-t border-separator-gray rounded-b-3xl pb-2">
          <div className="col-span-3 benefits-item-left">Eventos exclusivos</div>
          <div className="benefits-item-center text-xl"><TbChecks /></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
          <div className="benefits-item-center"></div>
        </div>
      </div>
      {/* <div className='w-full h-full bg-white grid grid-cols-7 rounded-3xl items-center justify-between py-2 px-1'>
        <div className="w-full h-full grid grid-rows-12 col-span-3 rounded-t-3xl items-center pl-5 pr-11 py-1">
          <div className="py-1 font-bold ">Beneficios</div>
          <div className="py-1 border-t border-separator-gray">Descuento de cumpleaños</div>
          <div className="py-1 border-t border-separator-gray">Descuentos exclusivos</div>
          <div className="py-1 border-t border-separator-gray">Beneficios marcas aliadas</div>
          <div className="py-1 border-t border-separator-gray">Tres envíos gratis al año</div>
          <div className="py-1 border-t border-separator-gray">Comunicación personalizada</div>
          <div className="py-1 border-t border-separator-gray">Compra asistida por televentas</div>
          <div className="py-1 border-t border-separator-gray">Regalable cumpleaños</div>
          <div className="py-1 border-t border-separator-gray">Despacho express</div>
          <div className="py-1 border-t border-separator-gray">Atención prioritaria línea de atención</div>
          <div className="py-1 border-t border-separator-gray">Ingreso anticipado a eventos online</div>
          <div className="py-1 border-t border-separator-gray">Eventos exclusivos</div>
        </div>
        <div className="benefits-col-center grid grid-rows-12">
          <div className="benefits-item-center font-bold text-black">RockStar</div>
          <div className="benefits-item-center text-black border-t border-separator-gray">25%</div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
        </div>
        <div className="benefits-col-center grid grid-rows-12">
          <div className="benefits-item-center font-bold  text-black">CoolStar</div>
          <div className="benefits-item-center text-black border-t border-separator-gray">20%</div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
        </div>
        <div className="benefits-col-center grid grid-rows-12">
          <div className="benefits-item-center font-bold  text-black">Star</div>
          <div className="benefits-item-center text-black border-t border-separator-gray">20%</div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center text-xl text-black border-t border-separator-gray"><TbChecks /></div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
        </div>
        <div className="benefits-col-center grid grid-rows-12">
          <div className="benefits-item-center font-bold  text-black">New Talent</div>
          <div className="benefits-item-center text-black border-t border-separator-gray">20%</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
          <div className="benefits-item-center border-t border-separator-gray">.</div>
        </div>
    </div> */}
    </section>
  )
}

export default Benefits
