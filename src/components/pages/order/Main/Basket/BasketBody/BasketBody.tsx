import BasketProducts from '@/components/pages/order/Main/Basket/BasketBody/BasketProducts'
import EmptyBasket from '@/components/pages/order/Main/Basket/BasketBody/EmptyBasket'
import { useOrderContext } from '@/context/OrderContext'
import { isEmpty } from '@/utils/array'

export default function BasketBody() {
  const { basket, menu } = useOrderContext()

  if (isEmpty(basket)) {
    return <EmptyBasket isLoading={menu === undefined} />
  }

  return <BasketProducts />
}
