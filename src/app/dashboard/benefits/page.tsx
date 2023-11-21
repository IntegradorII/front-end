import { TbChecks } from 'react-icons/tb'

const Benefits = () => {
  return (
    <section className='w-full h-full flex flex-col gap-4'>
      <span className='font-bold'>Beneficios por segmento</span>
      <table className='w-full bg-white  rounded-3xl'>
        <thead>
          <tr>
            <th className='w-[50%] pl-4 text-start py-1.5'>Beneficios</th>
            <th className='table-title'>RockStar</th>
            <th className='table-title'>CoolStar</th>
            <th className='table-title bg-yellow'>Star</th>
            <th className='table-title'>New Talent</th>
          </tr>
        </thead>
        <tbody>
          <tr className='py-2 text-center'>
            <td className='table-description'>Descuento de cumpleaños</td>
            <td className='table-border'>25%</td>
            <td className='table-border'>20%</td>
            <td className='table-border bg-yellow'>20%</td>
            <td className='table-border'>20%</td>
          </tr>
          <tr>
            <td className='table-description'>Descuentos exclusivos</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border bg-yellow'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Beneficios marcas aliadas</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border bg-yellow'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Tres envíos gratis al año</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Comunicación personalizada</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Compra asistida por televentas</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Regalable cumpleaños</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Despacho express</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='table-description'>Atención prioritaria línea de atención</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='pl-4 text-start border-t py-1.5'>Ingreso anticipado a eventos online</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
          <tr>
            <td className='pl-4 text-start border-t py-1.5'>Eventos exclusivos</td>
            <td className='table-border'>
              <div className='flex justify-center items-center'>
                <TbChecks />
              </div>
            </td>
            <td className='table-border'></td>
            <td className='table-border bg-yellow'></td>
            <td className='table-border'></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Benefits
