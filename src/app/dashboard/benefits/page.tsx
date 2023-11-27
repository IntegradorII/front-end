import { TbChecks } from 'react-icons/tb'

const segmentSelected = 'star'

interface Benefit {
  name: string
  rockStar: string | JSX.Element
  coolStar: string | JSX.Element
  star: string | JSX.Element
  newTalent: string | JSX.Element
}

const benefits: Benefit[] = [
  {
    name: 'Descuento de cumpleaños',
    rockStar: '25%',
    coolStar: '20%',
    star: '20%',
    newTalent: '20%'
  },
  {
    name: 'Descuentos exclusivos',
    rockStar: <TbChecks />,
    coolStar: <TbChecks />,
    star: <TbChecks />,
    newTalent: ''
  },
  {
    name: 'Beneficios marcas aliadas',
    rockStar: <TbChecks />,
    coolStar: <TbChecks />,
    star: <TbChecks />,
    newTalent: ''
  },
  {
    name: 'Tres envíos gratis al año',
    rockStar: <TbChecks />,
    coolStar: <TbChecks />,
    star: '',
    newTalent: ''
  },
  {
    name: 'Comunicación personalizada',
    rockStar: <TbChecks />,
    coolStar: <TbChecks />,
    star: '',
    newTalent: ''
  },
  {
    name: 'Compra asistida por televentas',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  },
  {
    name: 'Regalable cumpleaños',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  },
  {
    name: 'Despacho express',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  },
  {
    name: 'Atención prioritaria línea de atención',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  },
  {
    name: 'Ingreso anticipado a eventos online',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  },
  {
    name: 'Eventos exclusivos',
    rockStar: <TbChecks />,
    coolStar: '',
    star: '',
    newTalent: ''
  }
]

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
            <th className='table-selected'>Star</th>
            <th className='table-title'>New Talent</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit: Benefit) => {
            const { name, ...rest } = benefit
            return (
              <tr key={name} className='py-2 text-center'>
                <td className='table-description'>{name}</td>
                {Object.keys(rest).map((key) => (
                  <td key={key} className={`${key === segmentSelected ? 'table-selected' : 'table-border'} text-center`}>
                    <span className='flex items-center justify-center'>
                      {benefit[key as keyof Benefit]}
                    </span>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Benefits
