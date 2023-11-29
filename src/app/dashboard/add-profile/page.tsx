'use client'
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddProfile = () => {
  const clothes = [
    {
      tag: 'topSize',
      name: 'Talla superior: ',
      image: '/images/top-size.png'
    },
    {
      tag: 'bottomSize',
      name: 'Talla inferior: ',
      image: '/images/lower-size.png'
    },
    {
      tag: 'shoesSize',
      name: 'Talla de calzado: ',
      image: '/images/shoes-size.png'
    }
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Masculino',
    relation: 'hijo',
    birthDate: new Date()
  })

  const handleInputChange = (e: { target: { name: any, value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      birthDate: date
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // enviar datos al backend
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <section className='flex w-full h-full items-center'>
        <div className='flex flex-col items-center gap-6 w-1/2 border-r-separator-gray border-r-2 '>
          <h2 className='text-2xl font-bold w-full'>Datos de tu niño o niña</h2>
          <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
            <div className='flex flex-col items-center gap-2 my-4'>
              <IoAddSharp className='rounded-full object-cover bg-separator-gray w-[120px] h-[120px]'/>
              <span className='text-secondary-text text-xl font-bold text-[#444647]'>Subir foto</span>
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-4 my-6'>
              <label htmlFor="firstName" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Nombre:
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                />
              </label>
              <label htmlFor="lastName" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Apellido:
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                />
              </label>
              <label htmlFor="gender" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Género:
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
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
                  id="relation"
                  name="relation"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                >
                  <option value="hijo">Hijo</option>
                  <option value="hija">Hija</option>
                  <option value="nieto">Nieto</option>
                  <option value="nieta">Nieta</option>
                  <option value="sobrino">Sobrino</option>
                  <option value="sobrina">Sobrina</option>
                  <option value="hermano">Hermano</option>
                  <option value="hermana">Hermana</option>
                  <option value="primo">Primo</option>
                  <option value="prima">Prima</option>
                  <option value="amigo">Amigo</option>
                  <option value="amiga">Amiga</option>
                </select>
              </label>
              <label htmlFor="birthDate" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Fecha de nacimiento:
                <DatePicker
                  selected={formData.birthDate}
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
                    <label htmlFor={cloth.tag} className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                      <select
                        id={cloth.tag}
                        name={cloth.tag}
                        value={formData.gender}
                        onChange={handleInputChange}
                        className='h-14 w-16 rounded-3xl py-1 px-3 bg-[#A1A2A3] text-white'
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
          <button type="submit" className='w-full max-w-[10rem] rounded-full py-2 px-3 bg-yellow font-bold'>Registrar</button>
        </div>
      </section>
    </form>
  )
}

export default AddProfile
