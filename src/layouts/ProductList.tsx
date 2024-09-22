import Card from "../fragments/Card";
import ProductData, { deleteProduct } from "../data/ProductData";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(ProductData);

  const handleDelete = (id: number) => {
    const updatedProducts = deleteProduct(id);
    setProducts(updatedProducts);  
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const productList = products.map((product) => {
    return (
      <Card
        key={product.id}
        imgURL={product.imgURL}
        title={product.nama}
        deskripsi={product.deskripsi}
        harga={product.harga}
        onDelete={() => handleDelete(product.id)}
        onEdit={() => handleEdit()}
      />
    );
  });

  return <div className="product-container">{productList}</div>;
}

export default ProductList;
