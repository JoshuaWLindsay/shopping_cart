import { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct, 
  getCart, checkoutCart, addToCart } from "../../services/products";
import AddForm from "./AddForm";
import Product from "./Product";

const App = () => {
  const [productListing, setProductListing] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProductListing(data);
    })();
  }, [productListing]);

  const handleCreateProduct = async (newProduct, callback) => {
    try {
      const data = await createProduct({ ...newProduct });
      setProductListing(productListing.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleUpdateProduct = async (productId, newProduct, callback) => {
    try {
      const data = await updateProduct(productId, { ...newProduct });
      const newProductListing = productListing.map(product => {
        if (product._id === data._id) return data;
        return product;
      })
      setProductListing(newProductListing);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      console.log(productId);
      const data = await deleteProduct(productId);
      if (data === null) {
        const newProductListing = productListing.filter(product => product._id !== productId);
        setProductListing(newProductListing);  
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data);
      setTotal(cartTotal());
    })();
  }, [cart, total]);

  const handleAddToCart = async (productId) => {
    try {
      const data = await addToCart(productId);
      const newProductListing = productListing.map(product => {
        if (product._id !== productId) {
          return data.product;
        }
        return product;
      });
      setProductListing(newProductListing);

      // Update or add to cart      
    } catch (e) {
      console.log(e);
    }
  }

  const handleCheckoutCart = async () => {
    try {
      const data = await checkoutCart();
      if (data === null) {
        setCart([]);
        setTotal(0);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const cartTotal = () => {
    return cart.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <table className="cart-items">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" className="total">Total: ${total}</td>
              </tr>
            </tfoot>
          </table>
          <div className="checkout-button">
            <button className="checkout" onClick={() => handleCheckoutCart()}>Checkout</button>
          </div>
        </div>
      </header>

      <main>
        <div className="product-listing">
          <h2>Products</h2>
          <ul className="product-list">
            {productListing.map(product => (
              <Product product={product} onAddToCart={handleAddToCart} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct} />
            ))}
          </ul>
        </div>
        <AddForm onSubmit={handleCreateProduct} />
      </main>
    </div>
  );
};

export default App;