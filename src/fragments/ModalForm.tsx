import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import ProductData, { newProduct } from "../data/ProductData";  // Pastikan import ProductData

interface ModalFormProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InitialState {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  imgURL: string;
}

function ModalForm({ isModalOpen, setIsModalOpen }: ModalFormProps) {
  const getNextId = () => {
    const highestId = ProductData.reduce((max, product) => (product.id > max ? product.id : max), 0);
    return highestId + 1;
  };

  const [addProduct, setAddNewProduct] = useState<InitialState>({
    id: getNextId(),
    deskripsi: '',
    nama: '',
    harga: 0,
    imgURL: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAddNewProduct({
      ...addProduct,
      [id]: id === "harga" ? (value === "" ? 0 : parseFloat(value)) : value 
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newProduct(addProduct);  
    setIsModalOpen(false);
    console.log(ProductData);  
  };

  if (!isModalOpen) return null;

  return (
    <div className="container-modal">
      <form onSubmit={handleSubmit}>
        <div className="modal-header">
          <Input type="text" placeholder="Nama Brand" id="nama" value={addProduct.nama} onChange={handleChange} />
          <Input type="text" placeholder="Deskripsi" id="deskripsi" value={addProduct.deskripsi} onChange={handleChange} />
          <Input type="number" placeholder="10000000" id="harga" value={addProduct.harga} onChange={handleChange} />
          <Input type="text" placeholder="https://imgurl.com" id="imgURL" value={addProduct.imgURL} onChange={handleChange} />
        </div>
        <div className="modal-footer">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default ModalForm;
