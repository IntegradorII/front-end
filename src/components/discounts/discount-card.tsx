export interface Discount {
  id: number
  type: 'oferta' | 'cupon' | 'descuento'
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
    <article className="flex items-center justify-start w-4/5 gap-4 px-4 rounded-md bg-white cursor-pointer hover:shadow-sm">
      <div className="flex flex-col items-center gap-2 py-3 px-2 w-3/12">
        <h2 className="text-3xl font-bold uppercase text-[#DDFF00] text-center">{discount?.title ?? discount.value}</h2>
        <p className="text-sm uppercase text-center">{discount.type}</p>
      </div>
      <span className="h-full w-[1px] bg-gray-500" />
      <div className="flex flex-col gap-2 py-3 px-2 w-9/12">
        <p className="text-2xl font-semibold">{discount.description}</p>
        <p className="text-sm text-gray-700">Fecha de expiracion: {discount.expirationDate}</p>
      </div>
    </article>
  )
}
