import { type KidProfile as KP, type SaleItem, getSaleItems } from '@/app/dashboard/profile/utils'

interface KidProfileProps {
  profile: KP
}

export async function KidProfile ({ profile }: KidProfileProps) {
  const saleItems: SaleItem[] = await getSaleItems(profile.id)
  return (
    <section className='flex w-full h-full py-7'>
      <div className='flex flex-col items-center justify-start gap-3 w-1/2'>
        <h2 className='font-bold text-xl'>Datos de {profile.firstName}</h2>
        <div className='w-full max-w-[10rem] flex flex-col items-center justify-center gap-1 px-4'>
          <img src={profile.image} alt={profile.firstName} className='rounded-full object-cover bg-center' />
          <span className='text-lg'>{profile.firstName} {profile.lastName}</span>
        </div>
        <div className='flex flex-col gap-1 max-w-[17rem]'>
        </div>
        <div className='flex flex-col gap-1 max-w-[17rem]'>
          <h2 className='font-bold text-xl'>Ultimas compras</h2>
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
        {/* <div className='flex flex-col gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Nombre</label>
          <input type='text' value={profile.firstName} readOnly
            className='w-full rounded-xl py-1 px-3'/>
        </div>
        <div className='flex flex-col gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Apellido</label>
          <input type='text' value={profile.lastName} readOnly
            className='w-full rounded-xl py-1 px-3'/>
        </div>
        <div className='flex flex-col gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Genero</label>
          <input type='text' value={profile.gender} readOnly
            className='w-full rounded-xl py-1 px-3'/>
        </div>
        <div className='flex flex-col gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Fecha de nacimiento</label>
          <input type='text' value={profile.birthDate} readOnly
            className='w-full rounded-xl py-1 px-3'/>
        </div> */}
      </div>
      <span className='w-[2px] bg-white h-full' />
      <div className='flex flex-col items-center gap-5 w-1/2'>
        <h2 className='font-bold text-xl'>Tallas de {profile.firstName}</h2>
        <div className='flex flex-col items-start gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Talla superior:</label>
          <div className='flex items-center justify-between gap-2 w-full rounded-xl py-2 px-3 bg-white'>
            <img src={profile.image} alt={profile.firstName}
              className='rounded-full object-cover bg-center w-16 h-16 p-2 bg-gray-300' />
            <input type='text' value={profile.topSize} readOnly
              className='w-full rounded-xl py-1 px-3 bg-gray-300'/>
          </div>
        </div>
        <div className='flex flex-col items-start gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Talla inferior:</label>
          <div className='flex items-center justify-between gap-2 w-full rounded-xl py-2 px-3 bg-white'>
            <img src={profile.image} alt={profile.firstName}
              className='rounded-full object-cover bg-center w-16 h-16 p-2 bg-gray-300' />
            <input type='text' value={profile.bottomSize} readOnly
              className='w-full rounded-xl py-1 px-3 bg-gray-300'/>
          </div>
        </div>
        <div className='flex flex-col items-start gap-1 max-w-[17rem]'>
          <label className='pl-3 font-bold'>Talla de calzado:</label>
          <div className='flex items-center justify-between gap-2 w-full rounded-xl py-2 px-3 bg-white'>
            <img src={profile.image} alt={profile.firstName}
              className='rounded-full object-cover bg-center w-16 h-16 p-2 bg-gray-300' />
            <input type='text' value={profile.shoeSize} readOnly
              className='w-full rounded-xl py-1 px-3 bg-gray-300'/>
          </div>
        </div>
        <button className='w-full max-w-[10rem] rounded-xl py-2 px-3 bg-[#DDFF00]'>Editar</button>
      </div>
    </section>
  )
}
