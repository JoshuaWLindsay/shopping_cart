// import { useState } from "react";
// import { updateProduct } from "../../services/products";

// const EditProduct = ({ id, title, price, quantity }) => {
//   const [editTitle, setTitle] = useState(title);
//   const [editPrice, setPrice] = useState(price);
//   const [editQuantity, setQuantity] = useState(quantity);

//   details = { "title": editTitle, 
//     "price": editPrice, 
//     "quantity": editQuantity,
//   };
  
//   const handleCancel = (e) => {
//     e.preventDefault();
//     reset();
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await updateProduct(id, details);
//   }

//   const reset = () => {
//     setTitle(title);
//     setPrice(price);
//     setQuantity(quantity);
//   }

//   return (
//     <div className="edit-form">
//       <h3>Edit Product</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="product-name">Product Name</label>
//           <input
//             type="text"
//             id="product-name"
//             value={editTitle}
//             onChange={(e) => setTitle(e.target.value)}
//             aria-label="Product Name"
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="product-price">Price</label>
//           <input
//             type="number"
//             id="product-price"
//             value={editPrice}
//             onChange={(e) => setPrice(e.target.value)}
//             aria-label="Product Price"
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="product-quantity">Quantity</label>
//           <input
//             type="number"
//             id="product-quantity"
//             value={editQuantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             aria-label="Product Quantity"
//           />
//         </div>

//         <div className="actions form-actions">
//           <button type="submit" onClick={(e) => handleSubmit(e)}>Update</button>
//           <button type="button" onClick={(e) => handleCancel(e)}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default EditProduct;