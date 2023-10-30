import { BrandCard } from '@/components/alliedBrands/BrandCard'
import { SideBar } from '@/components/common/SideBar'

const AlliedBrands = () => {
  return (
    <div className="w-full h-full bg-light-gray">
      <div className='flex w-full h-full'>
        <SideBar/>
        <div className='w-[75%] ml-[25%] py-10 flex flex-col gap-4'>
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
      </div>
    </div>
  )
}

export default AlliedBrands
