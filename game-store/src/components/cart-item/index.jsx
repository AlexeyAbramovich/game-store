import './cart-item.css'

export const CartItem = ({ price, title, id }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
      </div>
    </div>
  )
}
