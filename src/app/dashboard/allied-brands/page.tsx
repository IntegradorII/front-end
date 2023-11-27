import { BrandCard } from '@/components/allied-brands/brand-card'

interface AlliedBrand {
  id: number
  name: string
  imagePath: string
  url: string
}

const brands: AlliedBrand[] = [
  {
    id: 10001,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10002,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10003,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10004,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10005,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10006,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10007,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10008,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  },
  {
    id: 10009,
    name: 'Marca aliada',
    imagePath: '/images/allied-brand.png',
    url: 'www.google.com'
  }
]

const AlliedBrands = () => {
  return (
    <section className='w-full flex flex-col gap-4'>
      <span className='font-bold'>Marcas aliadas</span>
      <div className='grid grid-cols-3 gap-y-4 gap-2'>
        {brands.map(({ id, ...rest }: AlliedBrand) => (
          <BrandCard key={id} {...rest}/>
        ))}
      </div>
    </section>
  )
}

export default AlliedBrands
