import { DiscountCard, type Discount } from '@/components/discounts/discount-card'

// creamos un array de descuentos
const discounts: Discount[] = [
  {
    id: 1,
    type: 'oferta',
    title: 'Envio gratis',
    description: '¡Envio sin costo en tu proximo pedido!',
    expirationDate: '2021-08-31'
  },
  {
    id: 2,
    type: 'oferta',
    value: '20%',
    description: '¡Recibe un 20% de descuento en tu proxima compra!',
    expirationDate: '2021-08-31'
  },
  {
    id: 3,
    type: 'cupon',
    value: '$ 15000',
    description: '¡Obten un descuento de $15000 pesos en cualquiera de tus proximas compras!',
    expirationDate: '2021-08-31'
  },
  {
    id: 4,
    type: 'oferta',
    value: '30%',
    description: '¡Recibe un 30% de descuento en tu proxima compra!',
    expirationDate: '2021-08-31'
  },
  {
    id: 5,
    type: 'cupon',
    value: '$ 10000',
    description: '¡Obten un descuento de $10000 pesos en cualquiera de tus proximas compras!',
    expirationDate: '2021-08-31'
  },
  {
    id: 6,
    type: 'cupon',
    value: '$ 25000',
    description: '¡Obten un descuento de $25000 pesos en cualquiera de tus proximas compras!',
    expirationDate: '2021-08-31'
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
