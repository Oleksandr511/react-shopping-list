import { useState } from "react";

const useProductList = () => {
    const [products, setProducts] = useState([
        { label: 'tomatoes', done: false },
        { label: 'meet', done: false },
        { label: 'fish', done: false },
        { label: 'chocolate', done: false },
        { label: 'cheese', done: false },
        { label: 'sausage', done: false },
        { label: 'juice', done: false },
    ]);

    function addProduct(product) {
        setProducts(prevProducts => {
            const newProducts = [...prevProducts];
            const index = products.indexOf(product);
            if (index!== -1) {
                newProducts[index] = {...newProducts[index], done: !newProducts[index].done}
            }
            return newProducts;
        });
    }

    function updateLength() {
        return products.reduce((acc,cur) => {
             return cur.done ? acc+1 : acc;
            
        }, 0);
    }

    return { products, addProduct, updateLength};
};

export default useProductList;
