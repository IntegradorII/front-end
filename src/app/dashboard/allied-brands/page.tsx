import { BrandCard } from '@/components/allied-brands/brand-card'

const AlliedBrands = () => {
  return (
    <section className='w-full flex flex-col gap-4'>
      <span className='font-bold'>Marcas aliadas</span>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/allied-brand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
      </div>
    </section>
  )
}

export default AlliedBrands
