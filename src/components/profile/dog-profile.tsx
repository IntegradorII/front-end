import { type PetProfile as PP, type SaleItemPets, getSaleItemsPets } from '@/app/dashboard/profile/utils'
import Image from 'next/image'
import Link from 'next/link'

interface PetProfileProps {
  profile: PP
}

export async function PetProfile ({ profile }: PetProfileProps) {
  const saleItems: SaleItemPets[] = await getSaleItemsPets(profile.id)
  const personality = [
    {
      type: 'Cazador',
      textColor: 'yellow',
      color: '#444647'
    },
    {
      type: 'Curioso',
      textColor: 'black',
      color: 'white'
    },
    {
      type: 'Independiente',
      textColor: 'yellow',
      color: '#444647'
    },
    {
      type: 'Juguetón',
      textColor: 'black',
      color: 'white'
    },
    {
      type: 'Travieso',
      textColor: 'yellow',
      color: '#444647'
    },
    {
      type: 'Tranquilo',
      textColor: 'black',
      color: 'white'
    },
    {
      type: 'Tímido',
      textColor: 'yellow',
      color: '#444647'
    },
    {
      type: 'Fiel',
      textColor: 'black',
      color: 'white'
    }
  ]
  return (
    <section className='flex w-full h-full items- justify-start'>
      <div className='flex flex-col items-center gap-6 w-1/2 border-r-separator-gray border-r-2 '>
        <h2 className='text-2xl font-bold w-full'>Datos de {profile.name}</h2>
        <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
          <img src={profile.profileImg} alt={profile.name} width={120} height={120} className='rounded-full'/>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-secondary-text text-xl font-bold'>{profile.name}</span>
          </div>
        </div>
        <table className="w-[450px] border border-transparent rounded-lg overflow-hidden">
          <thead className="bg-[#444647] rounded-t-lg w-[450px] h-11 text-yellow">
            <tr>
              <th className="w-[120px] text-center mx-2 border-r border-white">Género</th>
              <th className="w-[210px] text-center border-r border-white">Fecha de nacimiento</th>
              <th className="w-[120px] text-center">Parentesco</th>
            </tr>
          </thead>
          <tbody className="bg-[#D9D9D9] h-11 text-[#444647] rounded-b-lg">
            <tr>
              <td className="w-[120px] text-center mx-2 border-r border-white">{profile.gender}</td>
              <td className="w-[210px] text-center border-r border-white">{profile.birthDate}</td>
              <td className="w-[120px] text-center">{profile.relation}</td>
            </tr>
          </tbody>
        </table>
        <div className='flex flex-col gap-4 w-full'>
          <h2 className='text-2xl font-bold w-full'>Últimas compras</h2>
          <div className='w-full flex flex-wrap items-center justify-around'>
            {saleItems.map((item) => (
              <div key={item.id} className='flex flex-col items-center h-[260px] w-[215px] bg-[#D9D9D9] rounded-2xl justify-center'>
                <Image src={item.image} alt={item.name} width={190} height={190} className='rounded-2xl m-3' />
                <div className=' flex justify-center items-center w-full h-[55px] bg-[#8E8F90] rounded-bl-2xl rounded-br-2xl'>
                  <span className='text-5 text-yellow font-bold '>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 w-1/2 h-full px-4 justify-between items-center'>
        <h2 className='text-2xl font-bold w-full'>Características de {profile.name}</h2>
        <label className='pl-3 text-xl font-bold w-full'>Tamaño:</label>
        <div className='flex gap-10'>
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center bg-[#98999A] rounded-xl py-3 px-7'>
              <img src='/images/Pet.png' alt='perro Pequeño' width={90} height={90} />
            </div>
            <span className='text-m font-bold '>Grande</span>
          </div>
        </div>
        <label className='pl-3 text-xl font-bold w-full'>Personalidad:</label>
        <div className='flex flex-wrap gap-3 px-10'>
          {personality.map((item) => (
            <div key={item.type} className={'flex justyfy-center content-center rounded-3xl py-1 px-3'} style={{ backgroundColor: item.color }}>
              <span className={`text-${item.textColor} font-bold`}>{item.type}</span>
            </div>
          ))}
        </div>
        <Link href={`/dashboard/edit-profile/${profile.id}`} >
          <button className='w-full max-w-[10rem] rounded-full py-2 px-3 bg-yellow font-bold'>Editar</button>
        </Link>
      </div>
    </section>
  )
}
