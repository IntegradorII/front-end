'use client'
import { type PetProfile as PP } from '@/app/dashboard/profile/utils'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import { FaDog, FaCat } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'

interface PetProfileProps {
  profile: PP
}

export function EditPetProfile ({ profile }: PetProfileProps) {
  const personality = ['Cazador', 'Curioso', 'Independiente', 'Juguetón', 'Travieso', 'Tranquilo', 'Tímido', 'Fiel']
  const sizes = ['Pequeño', 'Grande']
  const [formData, setFormData] = useState({
    name: profile.name,
    gender: profile.gender,
    relation: profile.relation,
    birthDate: new Date(profile.birthDate),
    selectedPet: profile.type,
    selectedPersonalities: profile.characteristcs,
    selectedSize: profile.size
  })

  const handleInputChange = () => {
  }

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      birthDate: date
    })
  }

  const handlePetButtonClick = (pet: 'dog' | 'cat') => {
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
  }

  console.log(profile.relation)

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
                  formData.selectedPet === 'dog'
                    ? 'bg-[#A1A2A3] text-white'
                    : 'bg-white text-black'
                } rounded-full px-4 py-2`}
                onClick={() => { handlePetButtonClick('dog') }}
              >
                Perro
                <FaDog />
              </button>
              <button
                type='button'
                className={`text-xl flex gap-1 ${
                  formData.selectedPet === 'cat'
                    ? 'bg-[#A1A2A3] text-white'
                    : 'bg-white text-black'
                } rounded-full px-4 py-2`}
                onClick={() => { handlePetButtonClick('cat') }}
              >
                Gato
                <FaCat />
              </button>
            </div>
            <div className='flex flex-col items-center gap-2 my-10'>
              <img src={profile.profileImg} alt={profile.name} width={120} height={120} className='rounded-full'/>
              <span className='text-secondary-text text-xl font-bold'>Subir foto</span>
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
              <label htmlFor="firstName" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Nombre:
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.name}
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
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
              </label>
              <label htmlFor="relation" className='flex flex-col text-xl font-bold w-4/5 gap-2'>
                Relación:
                <select
                  id="relation"
                  name="relation"
                  value={profile.relation}
                  onChange={handleInputChange}
                  className='rounded-3xl py-1 px-3'
                >
                  <option value="Gathijo">Gathijo</option>
                  <option value="Gathija">Gathija</option>
                  <option value="Perrhijo">Perrhijo</option>
                  <option value="Perrhija">Perrhija</option>
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

export default EditPetProfile
