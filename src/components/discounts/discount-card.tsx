import { VerticalSeparator } from '../common/vertical-separator'

export interface Discount {
  id: number
  type: 'oferta' | 'cupón' | 'descuento'
  title?: string
  value?: string
  description: string
  expirationDate: string
}

interface DiscountCardProps {
  discount: Discount
}

export function DiscountCard ({ discount }: DiscountCardProps) {
  return (
    <article className="flex items-center justify-start h-[10rem] w-full gap-4 py-2 px-4 rounded-2xl bg-white cursor-pointer hover:shadow-sm">
      <div className="flex flex-col items-center gap-2 py-3 px-2 w-3/12">
        <h2 className="text-3xl font-bold uppercase text-yellow text-center">{discount?.title ?? discount.value}</h2>
        <p className="text-sm uppercase text-center">{discount.type}</p>
      </div>
      <VerticalSeparator percentage={100}/>
      <div className="flex flex-col gap-2 py-3 px-2 w-9/12">
        <p className="text-2xl font-semibold">{discount.description}</p>
        <p className="text-sm text-light-text">Fecha de expiración: {discount.expirationDate}</p>
      </div>
    </article>
  )
}
