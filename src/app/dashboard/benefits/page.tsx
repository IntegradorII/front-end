import { TbChecks } from 'react-icons/tb'

const Benefits = () => {
  return (
    <section className='w-full h-full flex flex-col items-start justify-start gap-8 bg-slate-300'>
      <h2 className='font-bold'>Beneficios por segmento</h2>
      <table className="w-full h-[90%] rounded-3xl items-center justify-between">
        <thead className="w-full bg-white rounded-t-3xl pt-2">
          <tr>
            <th className="font-bold">Beneficios</th>
            <th>RockStar</th>
            <th>CoolStar</th>
            <th className='bg-slate-400'>Star</th>
            <th>New Talent</th>
          </tr>
        </thead>
        <tbody className="bg-white border-t border-separator-gray">
          <tr>
            <td className='border text-center'>Descuento de cumpleaños</td>
            <td className='border text-center'>25%</td>
            <td className='border text-center'>20%</td>
            <td className='border text-center bg-slate-400'>20%</td>
            <td className='border text-center'>20%</td>
          </tr>
          <tr>
            <td className='border text-center'>Descuentos exclusivos</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center bg-slate-400'><TbChecks /></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Beneficios marcas aliadas</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center bg-slate-400'><TbChecks /></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Tres envíos gratis al año</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Comunicación personalizada</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Compra asistida por televentas</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Regalable cumpleaños</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Despacho express</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Atención prioritaria línea de atención</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Ingreso anticipado a eventos online</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
          <tr>
            <td className='border text-center'>Eventos exclusivos</td>
            <td className='border text-center'><TbChecks /></td>
            <td className='border text-center'></td>
            <td className='border text-center bg-slate-400'></td>
            <td className='border text-center'></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Benefits
