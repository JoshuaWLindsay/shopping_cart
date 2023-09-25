// import EditProduct from "./EditProduct";

// const ProductListing = ({ productListing, onDelete }) => {
//   const handleAddClick = (e) => {
//     e.preventDefault();
//   }

//   const handleEditClick = (e) => {
//     e.preventDefault();
//     const editForm = document.querySelector('.edit-form');
//     editForm.classList.toggle('visible');
//   }

//   return (
//     <div className="product-listing">
//       <h2>Products</h2>
//       <ul className="product-list">
//         {productListing.map((product) => (
//           // <Product key={product.id} title={product.title} price={product.price} quantity={product.quantity} onDelete={onDelete} />
//           <li className="product" id={product._id}>
//             <div className="product-details">
//               <h3>{product.title}</h3>
//               <p className="price">${product.price}</p>
//               <p className="quantity">{product.quantity} left in stock</p>
//               <div className="actions product-actions">
//                 <button className="add-to-cart" onClick={handleAddClick}>Add to Cart</button>
//                 <button className="edit" onClick={handleEditClick}>Edit</button>
//               </div>
//               <button className="delete-button" onClick={() => onDelete(product._id)}><span>X</span></button>
//             </div>
//             <EditProduct id={product._id} title={product.title} price={product.price} quantity={product.quantity} />
//           </li>    
//         ))}
//       </ul>
//     </div>
//   )
// };

// export default ProductListing;