import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { HistoryItem } from '@/components/purchase-history/history-item'

const PurchaseHistory = () => {
  return (
    <section className='debug w-full flex flex-col gap-4 justify-center'>
      <span className='font-bold px-10'>Histórico de compras</span>
      <div className='flex flex-col gap-8'>
        <div className='flex px-10'>
          <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (hembras)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex px-10'>
          <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Pañoleta para mascotas' purchaseDate='04 de enero de 2023' price='$19.990'/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex px-10'>
          <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (machos)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
        </div>
      </div>
    </section>
  )
}

export default PurchaseHistory
