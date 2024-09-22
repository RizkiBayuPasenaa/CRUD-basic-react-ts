import { useState } from "react";
import ModalForm from "./fragments/ModalForm";
import ProductList from "./layouts/ProductList";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Product</button>
      <ProductList />
      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}