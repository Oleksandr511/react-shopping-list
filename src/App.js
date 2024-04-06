import './App.css';
import { useState } from "react"

function App() {

  const [products, setProducts] = useState([]);

  function addProduct(product) {

    if (products.indexOf(product) === -1) {
      setProducts([...products, product]);
    }

    else {
      let array = products.filter((item) =>
        item !== product
      )
      setProducts([...array]);
    }
  }
  return (
    <div className="App">
      <h1>shopping list in METRO</h1>
      <div className="products">
        <div className="product__item">
          <input onChange={() => addProduct('meet')} type="checkbox" />
          <label> meet </label>
        </div>
        <div className="product__item">
          <input onChange={() => addProduct('fish')} type="checkbox" />
          <label> fish </label>
        </div>
        <div className="product__item">
          <input onChange={() => addProduct('chocolate')} type="checkbox" />
          <label> chocolate </label>
        </div>
        <div className="product__item">
          <input onChange={() => addProduct('cheese')} type="checkbox" />
          <label> cheese </label>
        </div>
        <div className="product__item">
          <input onChange={() => addProduct('sausage')} type="checkbox" />
          <label> sausage </label>
        </div>
        <div className="product__item">
          <input onChange={() => addProduct('juice')} type="checkbox" />
          <label> juice </label>
        </div>
      </div>
      <div className='selected__products'>
        {products.map((item, index) => {
          return (
            <div key={index}>{item}</div>
          )
        })}
        <div className='products__amount'>
          {products.length}
        </div>
      </div>
    </div>
  );
}

export default App;