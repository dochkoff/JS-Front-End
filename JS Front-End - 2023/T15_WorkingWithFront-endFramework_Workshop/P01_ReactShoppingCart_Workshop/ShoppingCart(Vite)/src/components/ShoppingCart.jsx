import { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingCartForm from "./ShoppingCartForm";
import { buyProduct, getAllProducts, removeProduct } from "../services/service";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);

  const totalPrice = products
    .filter((item) => item.isBought)
    .reduce((value, currentItem) => value + currentItem.cost, 0);

  useEffect(() => {
      getProducts();
  }, []);
    
    const getProducts = () => {
        getAllProducts().then((response) =>
          setProducts(Object.values(response))
        );
    }

  return (
    <section className="shopping-cart__container">
      <ShoppingCartForm />
      <section className="shopping-cart__items-list">
        {products.map((product) => (
          <ShoppingCartItem
            key={product.name}
            item={product}
            handleBuyItem={(productId) =>
              buyProduct(productId).then(getProducts)
            }
            handleRemoveItem={(productId) =>
              removeProduct(productId).then(getProducts)
            }
          />
        ))}
      </section>
      <div className="shopping-cart__total-price">
        <h1>Total Price: {totalPrice}$</h1>
      </div>
    </section>
  );
}
