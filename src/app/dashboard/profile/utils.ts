export const characteristcs = [
  'Juguetón',
  'Amigable',
  'Cazador',
  'Curioso',
  'Tranquilo',
  'Travieso',
  'Mimado',
  'Delicado',
  'Fiel'
]

export interface SaleItem {
  id: string
  name: string
  image: string
  profileId: string
}

export interface KidProfile {
  id: string
  profileType: 'kid' | 'pet'
  firstName: string
  lastName: string
  gender: string
  birthDate: string
  topSize: string
  bottomSize: string
  shoeSize: string
  image: string
}

export interface PetProfile {
  id: string
  profileType: 'kid' | 'pet'
  type: 'dog' | 'cat'
  name: string
  breed: string
  gender: string
  birthDate: string
  size: string
  characteristcs: typeof characteristcs
}

export const kidProfiles: KidProfile[] = [
  {
    id: 'ax1',
    profileType: 'kid',
    firstName: 'Juanita',
    lastName: 'Perez',
    gender: 'Femenino',
    birthDate: '01/01/2010',
    topSize: 'S',
    bottomSize: 'S',
    shoeSize: '38',
    image: '/images/ProfilePhoto.png'
  }
]

export const petProfiles: PetProfile[] = [
  {
    id: 'bx1',
    profileType: 'pet',
    type: 'dog',
    name: 'Bolt',
    breed: 'Golden Retriever',
    gender: 'Hembra',
    birthDate: '01/01/2010',
    size: 'Grande',
    characteristcs: ['Cazador', 'Curioso', 'Travieso', 'Delicado']
  }
]

export const saleItems: SaleItem[] = [
  {
    id: 'cx1',
    name: 'Camisa de cuadros',
    image: '/images/prod1.png',
    profileId: 'ax1'
  },
  {
    id: 'cx2',
    name: 'Pantalones',
    image: '/images/prod2.png',
    profileId: 'ax1'
  }
  // {
  //   id: 'cx3',
  //   name: 'Camisa de cuadros',
  //   image: '/images/img-no-disponible.png',
  //   profileId: 'ax1'
  // },
  // {
  //   id: 'cx4',
  //   name: 'Camisa de cuadros',
  //   image: '/images/img-no-disponible.png',
  //   profileId: 'ax1'
  // },
  // {
  //   id: 'cx5',
  //   name: 'Camisa de cuadros',
  //   image: '/images/img-no-disponible.png',
  //   profileId: 'ax1'
  // }
]

export const getKidProfile = async (id: string) => {
  return await new Promise<KidProfile | undefined>((resolve) => {
    setTimeout(() => {
      const kidProfile = kidProfiles.find((profile) => profile.id === id)
      resolve(kidProfile)
    }, 500)
  })
}

export const getPetProfile = async (id: string) => {
  return await new Promise<PetProfile | undefined>((resolve) => {
    setTimeout(() => {
      const petProfile = petProfiles.find((profile) => profile.id === id)
      resolve(petProfile)
    }, 500)
  })
}

export const getSaleItems = async (profileId: string) => {
  return await new Promise<SaleItem[]>((resolve) => {
    setTimeout(() => {
      resolve(saleItems.filter((item) => item.profileId === profileId))
    }, 500)
  })
}
