import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [isFormShown, setIsFormShown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, quantity, price }, reset);
    setIsFormShown(!isFormShown);
  }

  const reset = () => {
    setTitle("");
    setQuantity("");
    setPrice("");
  }

  return (
    <>
    {!isFormShown ? (
    <div className="add-form">
      <p><button className="add-product-button" onClick={() => setIsFormShown(!isFormShown)}>Add A Product</button></p>
    </div>) : (
    <div className="add-form visible">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" >Add</button>
          <button type="button" onClick={() => setIsFormShown(!isFormShown)}>Cancel</button>
        </div>
      </form>
    </div>)}
    </>
  )
}

export default AddForm;