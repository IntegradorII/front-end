import { HorizontalSeparator } from '@/components/common/HorizontalSeparator'
import { SideBar } from '@/components/common/SideBar'
import { HistoryItem } from '@/components/purchaseHistory/HistoryItem'

const PurchaseHistory = () => {
  return (
    <div className="w-full h-full bg-light-gray">
      <div className='flex w-full h-full'>
        <SideBar/>
        <div className='w-[75%] ml-[25%] py-10 flex flex-col gap-4'>
          <div className='px-16'>
            <span className='font-bold'>Histórico de compras</span>
          </div>
          <div className='flex px-16'>
            <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (hembras)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
          </div>
          <div className='my-4'>
            <HorizontalSeparator percentage={95}/>
          </div>
          <div className='flex px-16'>
            <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Pañoleta para mascotas' purchaseDate='04 de enero de 2023' price='$19.990'/>
          </div>
          <div className='my-4'>
            <HorizontalSeparator percentage={95}/>
          </div>
          <div className='flex px-16'>
            <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (machos)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseHistory
