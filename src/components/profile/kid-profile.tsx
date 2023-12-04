import { type KidProfile as KP, type SaleItem, getSaleItems } from '@/app/dashboard/profile/utils'
import Image from 'next/image'
import Link from 'next/link'

interface KidProfileProps {
  profile: KP
}

export async function KidProfile ({ profile }: KidProfileProps) {
  const saleItems: SaleItem[] = await getSaleItems(profile.id)
  const clothes = [
    {
      name: 'Talla superior: ',
      image: profile.topSizeImg,
      size: profile.topSize
    },
    {
      name: 'Talla inferior: ',
      image: profile.lowerSizeImg,
      size: profile.lowerSize
    },
    {
      name: 'Talla de calzado: ',
      image: profile.shoesSizeImg,
      size: profile.shoesSize
    }
  ]
  return (
    <section className='flex w-full h-full items-center'>
      <div className='flex flex-col items-center gap-6 w-1/2 border-r-separator-gray border-r-2 '>
        <h2 className='text-2xl font-bold w-full'>Datos de {profile.firstName}</h2>
        <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
          <img src={profile.profileImg} alt={profile.firstName} width={120} height={120} className='rounded-full'/>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-secondary-text text-xl font-bold'>{profile.firstName}</span>
            <span className='text-secondary-text text-xl font-bold'>{profile.lastName}</span>
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
      <div className='flex flex-col gap-3 w-1/2 px-4 items-center'>
        <h2 className='text-2xl font-bold w-full'>Tallas de {profile.firstName}</h2>
        <div className='flex flex-col gap-5 w-full items-center'>
          {clothes.map((cloth, index) => (
            <div className='flex flex-col items-start gap-1 w-[400px]' key={index}>
              <label className='pl-3 text-xl font-bold'>{cloth.name}</label>
              <div className='flex items-center justify-around w-[400px] h-[140px] rounded-xl gap-6 bg-white'>
                <img src={cloth.image} alt={profile.firstName} width={100} height={100} className='rounded-full object-cover bg-separator-gray' />
                <div className='w-1/2 flex items-center justify-center'>
                  <span className='py-1 px-3 font-semibold text-xl text-secondary-text'> {cloth.size} </span>
                </div>
              </div>
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
