export function formatPrice(priceToFormat: string | number): string {
  if (!priceToFormat) return '0,00 €'

  const numericPrice = replaceFrenchCommaWithDot(priceToFormat)

  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(numericPrice)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price: string | number): number {
  return typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price
}
