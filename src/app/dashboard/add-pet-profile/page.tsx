'use client'
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { FaDog, FaCat } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddProfile = () => {
  const personality = ['Cazador', 'Curioso', 'Independiente', 'Juguetón', 'Travieso', 'Tranquilo', 'Tímido', 'Fiel']
  const sizes = ['Pequeño', 'Grande']
  const [formData, setFormData] = useState({
    firstName: '',
    gender: 'Masculino',
    relation: 'hijo',
    birthDate: new Date(),
    selectedPet: '',
    selectedPersonalities: [] as string[],
    selectedSize: ''
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

  const handlePetButtonClick = (pet: string) => {
    setFormData({
      ...formData,
      selectedPet: formData.selectedPet === pet ? '' : pet
    })
  }

  const handlePersonalityButtonClick = (selectedPersonality: string) => {
    setFormData((prevData) => {
      const isSelected = prevData.selectedPersonalities.includes(selectedPersonality)

      if (isSelected) {
        // Si la personalidad ya está seleccionada, quítala
        return {
          ...prevData,
          selectedPersonalities: prevData.selectedPersonalities.filter((personality) => personality !== selectedPersonality)
        }
      } else {
        // Si la personalidad no está seleccionada, agrégala
        return {
          ...prevData,
          selectedPersonalities: [...prevData.selectedPersonalities, selectedPersonality]
        }
      }
    })
  }

  const handleSizeButtonClick = (selectedSize: string) => {
    setFormData({
      ...formData,
      selectedSize: formData.selectedSize === selectedSize ? '' : selectedSize
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
          <h2 className='text-2xl font-bold w-full'>Datos de tu mascota</h2>
          <div className='w-full flex flex-col items-center justify-center gap-1 px-4'>
            <div className='flex gap-4'>
              <button
                type='button'
                className={`text-xl flex gap-1 ${
                  formData.selectedPet === 'Perro'
                    ? 'bg-[#A1A2A3] text-white'
                    : 'bg-white text-black'
                } rounded-full px-4 py-2`}
                onClick={() => { handlePetButtonClick('Perro') }}
              >
                Perro
                <FaDog />
              </button>
              <button
                type='button'
                className={`text-xl flex gap-1 ${
                  formData.selectedPet === 'Gato'
                    ? 'bg-[#A1A2A3] text-white'
                    : 'bg-white text-black'
                } rounded-full px-4 py-2`}
                onClick={() => { handlePetButtonClick('Gato') }}
              >
                Gato
                <FaCat />
              </button>
            </div>
            <div className='flex flex-col items-center gap-2 my-10'>
              <IoAddSharp className='rounded-full object-cover bg-separator-gray w-[120px] h-[120px]'/>
              <span className='text-secondary-text text-xl font-bold text-[#444647]'>Subir foto</span>
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
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
        <div className='flex flex-col gap-10 w-1/2 h-full px-4 justify-between items-center'>
          <h2 className='text-2xl font-bold w-full'>Características de tu mascota</h2>
          <label className='pl-3 text-xl font-bold w-full'>Tamaño:</label>
          <div className='flex gap-10'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center'>
                <button
                  type='button'
                  className={`flex justify-center items-center rounded-xl w-36 h-28 ${
                    formData.selectedSize === size
                      ? 'bg-[#A1A2A3] text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => { handleSizeButtonClick(size) }}
                >
                  <img src='/images/Pet.png' alt={`perro ${size}`} width={size === 'Grande' ? 90 : 66} height={size === 'Grande' ? 90 : 60} />
                </button>
                <span className='text-m font-bold '>{size}</span>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <label className='pl-3 text-xl font-bold w-full'>Personalidad:</label>
            <label className='pl-3 text-xl font-bold w-full text-[#98999A]'>Elige hasta 4 características de tu peludo:</label>
            <div className='flex flex-wrap gap-3 px-8'>
              {personality.map((item) => (
                <button
                  key={item}
                  type='button'
                  className={`flex justify-center text-lg font-bold items-center rounded-3xl py-1 px-4 ${
                    formData.selectedPersonalities.includes(item)
                      ? 'bg-[#444647] text-yellow'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => { handlePersonalityButtonClick(item) }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className='w-full max-w-[10rem] rounded-full py-2 px-3 bg-yellow font-bold'>Registrar</button>
        </div>
      </section>
    </form>
  )
}

export default AddProfile
