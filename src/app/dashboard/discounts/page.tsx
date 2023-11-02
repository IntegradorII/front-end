import { DiscountCard, type Discount } from '@/components/discounts/discount-card'

// creamos un array de descuentos
const discounts: Discount[] = [
  {
    id: 1,
    type: 'oferta',
    title: 'Envío gratis',
    description: '¡Envío sin costo en tu próximo pedido!',
    expirationDate: '28 de Agosto de 2021'
  },
  {
    id: 2,
    type: 'oferta',
    value: '20%',
    description: '¡Recibe un 20% de descuento en tu próxima compra!',
    expirationDate: '28 de Agosto de 2021'
  },
  {
    id: 3,
    type: 'cupón',
    value: '$15.000',
    description: '¡Obten un descuento de $15.000 en cualquiera de tus próximas compras!',
    expirationDate: '28 de Agosto de 2021'
  },
  {
    id: 4,
    type: 'oferta',
    value: '30%',
    description: '¡Recibe un 30% de descuento en tu próxima compra!',
    expirationDate: '28 de Agosto de 2021'
  },
  {
    id: 5,
    type: 'cupón',
    value: '$10.000',
    description: '¡Obten un descuento de $10.000 en cualquiera de tus próximas compras!',
    expirationDate: '28 de Agosto de 2021'
  },
  {
    id: 6,
    type: 'cupón',
    value: '$25.000',
    description: '¡Obten un descuento de $25.000 en cualquiera de tus próximas compras!',
    expirationDate: '28 de Agosto de 2021'
  }
]

export default function Discounts () {
  return (
    <section className="flex flex-col items-center gap-6 py-7 px-4">
      {discounts.map(discount => (
        <DiscountCard key={discount.id} discount={discount} />
      ))}
    </section>
  )
}
