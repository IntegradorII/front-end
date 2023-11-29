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

export interface SaleItemPets {
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
  lowerSize: string
  shoesSize: string
  profileImg: string
  topSizeImg: string
  lowerSizeImg: string
  shoesSizeImg: string
  relation: string
}

export interface PetProfile {
  id: string
  profileType: 'kid' | 'pet'
  type: 'dog' | 'cat'
  name: string
  breed: string
  gender: string
  birthDate: string

  profileImg: string
  size: string
  characteristcs: typeof characteristcs
  relation: string
}

export const kidProfiles: KidProfile[] = [
  {
    id: 'ax1',
    profileType: 'kid',
    firstName: 'Pepito',
    lastName: 'Pérez',
    gender: 'Femenino',
    birthDate: '01/01/2010',
    topSize: 'Talla 10',
    lowerSize: 'Talla 10',
    shoesSize: 'Talla 30',
    profileImg: '/images/child1.png',
    topSizeImg: '/images/top-size.png',
    lowerSizeImg: '/images/lower-size.png',
    shoesSizeImg: '/images/shoes-size.png',
    relation: 'Hijo'
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
    profileImg: '/images/pet1.png',
    characteristcs: ['Cazador', 'Curioso', 'Travieso', 'Delicado'],
    relation: 'hijo'
  }
]

export const saleItems: SaleItem[] = [
  {
    id: 'cx1',
    name: 'Camisa de cuadros',
    image: '/images/photo-child-3.png',
    profileId: 'ax1'
  },
  {
    id: 'cx2',
    name: 'Pantalones',
    image: '/images/photo-child-5.png',
    profileId: 'ax1'
  }
]

export const saleItemsPets: SaleItemPets[] = [
  {
    id: 'cx1',
    name: 'Pañoleta',
    image: '/images/photo-pet-7.png',
    profileId: 'bx1'
  },
  {
    id: 'cx2',
    name: 'Collar',
    image: '/images/photo-pet-4.png',
    profileId: 'bx1'
  }
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

export const getSaleItemsPets = async (profileId: string) => {
  return await new Promise<SaleItemPets[]>((resolve) => {
    setTimeout(() => {
      resolve(saleItemsPets.filter((item) => item.profileId === profileId))
    }, 500)
  })
}
