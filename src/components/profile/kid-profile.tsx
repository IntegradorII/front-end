import { type KidProfile as KP, type SaleItem, getSaleItems } from '@/app/dashboard/profile/utils'
import { VerticalSeparator } from '../common/vertical-separator'

interface KidProfileProps {
  profile: KP
}

export async function KidProfile ({ profile }: KidProfileProps) {
  const saleItems: SaleItem[] = await getSaleItems(profile.id)
  return (
    <section className='flex w-full h-full'>
      <div className='flex flex-col justify-start gap-4 w-1/2 border-r-separator-gray border-r-2'>
        <h2 className='font-bold'>Datos de {profile.firstName}</h2>
        <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
          <img src={profile.profileImg} alt={profile.firstName} width={90} height={90} className='rounded-full'/>
          <span className='text-secondary-text font-bold'>{profile.firstName} {profile.lastName}</span>
        </div>
        <div className='flex flex-col gap-2 max-w-[17rem]'>
          <h2 className='font-bold'>Últimas compras</h2>
          <div className='w-full flex flex-wrap items-center justify-center gap-3'>
            {saleItems.map((item) => (
              <div key={item.id} className='flex flex-col items-center justify-center w-[45%] bg-gray-200 rounded-lg overflow-hidden'>
                <div className='p-2'>
                  <img src={item.image} alt={item.name} className='w-full aspect-square object-cover bg-center bg-white rounded-md' />
                </div>
                <span className='text-sm px-2 py-1 text-[#383d17] font-bold bg-gray-300'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='h-full'>
        <VerticalSeparator percentage={100}/>
      </div>
      <div className='flex flex-col gap-3 w-1/2'>
        <h2 className='font-bold'>Tallas de {profile.firstName}</h2>
        <div className='flex flex-col items-center gap-5 w-full text-sm'>
          <div className='flex flex-col items-start gap-1 w-full px-10'>
            <label className='pl-3 font-bold'>Talla superior:</label>
            <div className='flex items-center w-full rounded-xl py-4 px-6 gap-6 bg-white'>
              <img src={profile.topSizeImg} alt={profile.firstName} width={75} height={75} className='rounded-full object-cover bg-separator-gray' />
              <div className='w-full flex items-center justify-center'>
                <span className='py-1 px-3 font-semibold text-base text-secondary-text'> {profile.topSize} </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-1 w-full px-10'>
            <label className='pl-3 font-bold'>Talla inferior:</label>
            <div className='flex items-center w-full rounded-xl py-4 px-6 gap-6 bg-white'>
              <img src={profile.lowerSizeImg} alt={profile.firstName} width={75} height={75} className='rounded-full object-cover bg-separator-gray' />
              <div className='w-full flex items-center justify-center'>
                <span className='py-1 px-3 font-semibold text-base text-secondary-text'> {profile.lowerSize} </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-1 w-full px-10'>
            <label className='pl-3 font-bold'>Talla de calzado:</label>
            <div className='flex items-center w-full rounded-xl py-4 px-6 gap-6 bg-white'>
              <img src={profile.shoesSizeImg} alt={profile.firstName} width={75} height={75} className='rounded-full object-cover bg-separator-gray' />
              <div className='w-full flex items-center justify-center'>
                <span className='py-1 px-3 font-semibold text-base text-secondary-text'> {profile.shoesSize} </span>
              </div>
            </div>
          </div>
          <button className='w-full max-w-[10rem] rounded-full py-2 px-3 bg-yellow font-bold'>Editar</button>
        </div>
      </div>
    </section>
  )
}
