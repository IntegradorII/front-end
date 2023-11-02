import { BrandCard } from '@/components/allied-brands/brand-card'

const AlliedBrands = () => {
  return (
    <div className='w-full py-7 flex flex-col gap-4'>
      <div className='px-16'>
        <span className='font-bold'>Marcas aliadas</span>
      </div>
      <div className='flex flex-col px-16 gap-10'>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
        <div className='flex justify-between'>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
          <BrandCard imagePath='/images/AlliedBrand.png' brandName='Marca aliada' url='www.google.com'/>
        </div>
      </div>
    </div>
  )
}

export default AlliedBrands
