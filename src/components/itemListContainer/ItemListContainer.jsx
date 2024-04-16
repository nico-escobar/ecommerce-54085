import { useEffect } from "react";
import { useState } from "react"
import getProducts from "../../data/getProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({saludo}) => {
  const[products, setProducts] = useState([]);

  const {idCategory } =useParams ()

  useEffect(() => {
    getProducts()
      .then(response => {
        if(idCategory){
          const productsFilter = response.filter((product)=> product.category === idCategory )
          setProducts(productsFilter)
        }
        else{
          setProducts(response)
        }
      })
      .catch(error => { 
        console.error (error)
      });
},[idCategory]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );

};


export default ItemListContainer;
