import { type KidProfile as KP } from '@/app/dashboard/profile/utils'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface KidProfileProps {
  profile: KP
}

export function EditKidProfile ({ profile }: KidProfileProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: profile?.gender || 'Masculino',
    relation: profile?.relation || 'Hijo',
    birthDate: new Date(),
    topSize: profile?.topSize || 0,
    bottomSize: profile?.lowerSize || 0,
    shoesSize: profile?.shoesSize || 0
  })
  console.log(formData)
  const clothes = [
    {
      tag: 'topSize',
      name: 'Talla superior: ',
      image: '/images/top-size.png',
      dFata: profile.topSize
    },
    {
      tag: 'bottomSize',
      name: 'Talla inferior: ',
      image: '/images/lower-size.png',
      dFata: profile.lowerSize
    },
    {
      tag: 'shoesSize',
      name: 'Talla de calzado: ',
      image: '/images/shoes-size.png',
      dFata: profile.shoesSize
    }
  ]

  const handleInputChange = () => {
  }

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      birthDate: date
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <section className='flex w-full h-full items-center'>
        <div className='flex flex-col items-center gap-6 w-1/2 border-r-separator-gray border-r-2 '>
          <h2 className='text-2xl font-bold w-full'>Datos de {profile.firstName}</h2>
          <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
            <div className='flex flex-col items-center gap-2 my-4'>
              <img src={profile.profileImg} alt={profile.firstName} width={120} height={120} className='rounded-full'/>
              <span className='text-secondary-text text-xl font-bold'>Cambiar foto</span>
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-4 my-6'>
              <label htmlFor="firstName" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Nombre:
                <input
                  value={profile.firstName}
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                />
              </label>
              <label htmlFor="lastName" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Apellido:
                <input
                  value={profile.lastName}
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                />
              </label>
              <label htmlFor="gender" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Género:
                <select
                  id="gender"
                  name="gender"
                  value={profile.gender}
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </label>
              <label htmlFor="relation" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Relación:
                <select
                  value={profile.relation}
                  id="relation"
                  name="relation"
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                >
                  <option value="Hijo">Hijo</option>
                  <option value="Hija">Hija</option>
                  <option value="Nieto">Nieto</option>
                  <option value="Nieta">Nieta</option>
                  <option value="Sobrino">Sobrino</option>
                  <option value="Sobrina">Sobrina</option>
                  <option value="Hermano">Hermano</option>
                  <option value="Hermana">Hermana</option>
                  <option value="Primo">Primo</option>
                  <option value="Prima">Prima</option>
                  <option value="Amigo">Amigo</option>
                  <option value="Amiga">Amiga</option>
                </select>
              </label>
              <label htmlFor="birthDate" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Fecha de nacimiento:
                <DatePicker
                  selected={new Date(profile.birthDate)}
                  onChange={handleDateChange}
                  className='rounded-3xl text-center py-1 px-3 w-full'
                />
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-1/2 px-4 items-center'>
          <h2 className='text-2xl font-bold w-full'>Tallas</h2>
          <div className='flex flex-col gap-5 w-full items-center'>
            {clothes.map((cloth, index) => (
              <div className='flex flex-col items-start gap-1 w-[400px]' key={index}>
                <label className='pl-3 text-xl font-bold'>{cloth.name}</label>
                <div className='flex items-center justify-around w-[400px] h-[140px] rounded-xl gap-6 bg-white'>
                  <img src={cloth.image} alt={'talla'} width={100} height={100} className='rounded-full object-cover bg-separator-gray' />
                  <div className='w-1/2 flex items-center justify-center'>
                    <label htmlFor={cloth.tag} className='flex text-xl font-bold'>
                      <select
                        id={cloth.tag}
                        name={cloth.tag}
                        value={cloth.dFata}
                        onChange={handleInputChange}
                        className='h-14 w-20 rounded-xl bg-[#A1A2A3] py-1 px-4 text-white'
                      >
                        <option value="0">0</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className='w-full max-w-[10rem] rounded-full py-2 px-3 bg-yellow font-bold'>Guardar</button>
        </div>
      </section>
    </form>
  )
}

export default EditKidProfile
