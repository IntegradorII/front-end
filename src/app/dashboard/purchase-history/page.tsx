import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { HistoryItem } from '@/components/purchase-history/history-item'

const PurchaseHistory = () => {
  return (
    <section className='w-full flex flex-col gap-4 justify-center'>
      <span className='font-bold'>Histórico de compras</span>
      <div className='flex flex-col gap-8'>
        <HistoryItem imagePath='/images/photo-product-1.png' productName='Loción para mascotas (hembras)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
        <HorizontalSeparator percentage={100}/>
        <HistoryItem imagePath='/images/photo-product-2.png' productName='Pañoleta para mascotas' purchaseDate='04 de enero de 2023' price='$19.990'/>
        <HorizontalSeparator percentage={100}/>
        <HistoryItem imagePath='/images/photo-product-1.png' productName='Loción para mascotas (machos)' purchaseDate='24 de septiembre de 2022' price='$22.990'/>
      </div>
    </section>
  )
}

export default PurchaseHistory
