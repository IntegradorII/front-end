import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { HistoryItem } from '@/components/purchase-history/history-item'

const PurchaseHistory = () => {
  return (
    <section className='w-full flex flex-col gap-4 justify-center'>
      <span className='font-bold'>Histórico de compras</span>
      <div className='flex flex-col gap-8'>
        <HistoryItem imagePath='/images/photo-product-1.png' productName='Loción para mascotas (hembras)' purchaseDate='24 de septiembre de 2023' price='$22.990' link='https://www.offcorss.com/locion-para-mascotas-63140691/p'/>
        <HorizontalSeparator percentage={100}/>
        <HistoryItem imagePath='/images/photo-product-4.png' productName='Botas para bebé niña' purchaseDate='24 de enero de 2022' price='$179.990' link='https://www.offcorss.com/botas-42106831/p'/>
        <HorizontalSeparator percentage={100}/>
        <HistoryItem imagePath='/images/photo-product-3.png' productName='Disfraz de esqueleto que alumbra en la oscuridad para mascotas' purchaseDate='02 de enero de 2022' price='$74.990' link='https://www.offcorss.com/disfraz-6314078/p'/>
      </div>
    </section>
  )
}

export default PurchaseHistory
