
export interface ProductType {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  imgURL: string;
}

let ProductData: ProductType[] = [
  {
    id: 1,
    nama: 'Avanza',
    deskripsi: 'Mobil yang tahan lama dan awet',
    harga: 250000000,
    imgURL: 'https://www.mpm-rent.com/_next/image?url=https%3A%2F%2Fcms.mpm-rent.com%2Fapi%2Fshow-image%3Fpath_file%3Dnews%2F3%2F1695786549.webp&w=640&q=75',
  },
  {
    id: 2,
    nama: 'Xenia',
    deskripsi: 'Mobil keluarga dengan kenyamanan',
    harga: 220000000,
    imgURL: 'https://images.prod.seva.id/Daihatsu/All%20New%20Xenia/main_color/black.png',
  },
  {
    id: 3,
    nama: 'Innova',
    deskripsi: 'Mobil premium dengan kualitas terbaik',
    harga: 350000000,
    imgURL: 'https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/innova-hybrid-giias.jpg',
  },
  {
    id: 4,
    nama: 'Fortuner',
    deskripsi: 'SUV tangguh dan mewah',
    harga: 500000000,
    imgURL: 'https://medias.auto2000.co.id/sys-master-hybrismedia/h95/h2d/8832097812510/fortuner.png',
  },
  {
    id: 5,
    nama: 'Pajero',
    deskripsi: 'SUV premium dengan performa tinggi',
    harga: 600000000,
    imgURL: 'https://mitsubishipalembangsumsel.com/wp-content/uploads/2016/11/New-pajero-sport.png',
  }
]

export function newProduct(newProduct: ProductType) {
  ProductData.push(newProduct);
}


export function deleteProduct(id: number): ProductType[] {
  ProductData = ProductData.filter((product) => product.id !== id);
  return ProductData;  
}


export default ProductData;
