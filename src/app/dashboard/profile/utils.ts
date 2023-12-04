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
  firstName: string
  lastName: string
  gender: string
  birthDate: string
  topSize: number
  lowerSize: number
  shoesSize: number
  profileImg: string
  topSizeImg: string
  lowerSizeImg: string
  shoesSizeImg: string
  relation: string
}

export interface PetProfile {
  id: string
  type: '' | 'dog' | 'cat'
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
    firstName: 'Pepito',
    lastName: 'Pérez',
    gender: 'Masculino',
    birthDate: '2010-02-19',
    topSize: 6,
    lowerSize: 10,
    shoesSize: 12,
    profileImg: '/images/child-avatar-1.png',
    topSizeImg: '/images/top-size.png',
    lowerSizeImg: '/images/lower-size.png',
    shoesSizeImg: '/images/shoes-size.png',
    relation: 'Hijo'
  },
  {
    id: 'ax2',
    firstName: 'Juana',
    lastName: 'Pérez',
    gender: 'Femenino',
    birthDate: '2008-08-15',
    topSize: 6,
    lowerSize: 8,
    shoesSize: 10,
    profileImg: '/images/child-avatar-2.png',
    topSizeImg: '/images/top-size.png',
    lowerSizeImg: '/images/lower-size.png',
    shoesSizeImg: '/images/shoes-size.png',
    relation: 'Hija'
  },
  {
    id: 'ax3',
    firstName: 'Luis',
    lastName: 'Giraldo',
    gender: 'Masculino',
    birthDate: '2015-04-17',
    topSize: 8,
    lowerSize: 8,
    shoesSize: 10,
    profileImg: '/images/child-avatar-3.png',
    topSizeImg: '/images/top-size.png',
    lowerSizeImg: '/images/lower-size.png',
    shoesSizeImg: '/images/shoes-size.png',
    relation: 'Sobrino'
  }
]

export const petProfiles: PetProfile[] = [
  {
    id: 'bx1',
    type: 'dog',
    name: 'Tom',
    breed: 'Golden Retriever',
    gender: 'Macho',
    birthDate: '2014-01-22',
    size: 'Grande',
    profileImg: '/images/pet-avatar-1.png',
    characteristcs: ['Cazador', 'Curioso', 'Travieso', 'Delicado'],
    relation: 'Perrijo'
  },
  {
    id: 'bx2',
    type: 'cat',
    name: 'Luna',
    breed: 'Golden Retriever',
    gender: 'Hembra',
    birthDate: '2015-03-03',
    size: 'Pequeño',
    profileImg: '/images/pet-avatar-2.png',
    characteristcs: ['Cazador', 'Curioso', 'Travieso'],
    relation: 'Gathija'
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
  },
  {
    id: 'cx3',
    name: 'Camisa de cuadros',
    image: '/images/photo-child-3.png',
    profileId: 'ax2'
  },
  {
    id: 'cx4',
    name: 'Pantalones',
    image: '/images/photo-child-5.png',
    profileId: 'ax2'
  },
  {
    id: 'cx5',
    name: 'Camisa de cuadros',
    image: '/images/photo-child-3.png',
    profileId: 'ax3'
  },
  {
    id: 'cx6',
    name: 'Pantalones',
    image: '/images/photo-child-5.png',
    profileId: 'ax3'
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
  },
  {
    id: 'cx3',
    name: 'Pañoleta',
    image: '/images/photo-pet-7.png',
    profileId: 'bx2'
  },
  {
    id: 'cx4',
    name: 'Collar',
    image: '/images/photo-pet-4.png',
    profileId: 'bx2'
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
