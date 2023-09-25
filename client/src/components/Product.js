import { useState } from "react";

const Product = ({ product, onAddToCart, onDeleteProduct, onUpdateProduct }) => {
  const [title, setTitle] = useState(product.title);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);

  const [isEditShown, setIsEditShown] = useState(false);

  const reset = () => {
    setIsEditShown(!isEditShown);
    setTitle(product.title);
    setQuantity(product.quantity);
    setPrice(product.price);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        {quantity === 0 ? (
          <p className="quantity none-left">{product.quantity} left in stock</p>
        ) : (
          <p className="quantity">{product.quantity} left in stock</p>
        )}
        <div className="actions product-actions">
          {quantity === 0 ? (
            <button className="add-to-cart" disabled>Add to Cart</button>
          ) : (
            <button className="add-to-cart" onClick={() => onAddToCart(product._id)}>Add to Cart</button>
          )}
          <button className="edit" onClick={() => setIsEditShown(true)}>Edit</button>
        </div>
        <button className="delete-button" onClick={() => onDeleteProduct(product._id)}><span>X</span></button>
      </div>
      { !isEditShown ? null : (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}  
              aria-label="Product Name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              id="product-price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}  
              aria-label="Product Price"
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="number"
              id="product-quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value)
              }}  
              aria-label="Product Quantity"
            />
          </div>

          <div className="actions form-actions">
            <button type="submit" onClick={() => onUpdateProduct(product._id, { title, quantity, price })}>Update</button>
            <button type="button" onClick={() => reset()}>Cancel</button>
          </div>
        </form>
      </div>)}
    </li>
  )
}

export default Product;