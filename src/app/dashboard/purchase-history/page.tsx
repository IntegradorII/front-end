import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { HistoryItem } from '@/components/purchase-history/history-item'

const PurchaseHistory = () => {
  return (
    <div className='w-full py-7 px-4 flex flex-col gap-4'>
      <span className='font-bold'>Histórico de compras</span>
      <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (hembras)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
      <HorizontalSeparator percentage={100}/>
      <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Pañoleta para mascotas' purchaseDate='04 de enero de 2023' price='$19.990'/>
      <HorizontalSeparator percentage={100}/>
      <HistoryItem imagePath='/images/ProfilePhoto.png' productName='Loción para mascotas (machos)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
    </div>
  )
}

export default PurchaseHistory
