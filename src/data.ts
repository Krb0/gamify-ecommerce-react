export interface SliderItemsType {
  id: number;
  title: string;
  description: string;
  img: string;
  bg: string;
  textColor: string;
  objectPos: string;
}
export interface CategoryType {
  id: number;
  img: string;
  title: string;
}

export const sliderItems: SliderItemsType[] = [
  {
    id: 1,
    img: "https://asset.msi.com/resize/image/global/product/product_10_20170412133458_58edbc828cb95.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    title: "SUMMER SALE",
    description: "INCREDIBLE PRICES ON SUMMER SALE.",
    bg: "#ffffff",
    objectPos: "center",
    textColor: "rgba(122, 84, 192,0.95)",
  },
  {
    id: 2,
    img: "https://www.pny.eu/data/products/article-large/1621-20220106160317.png",
    title: "High End Gaming",
    description: "HIGH QUALITY PRODUCTS.",
    bg: "#ffffff",
    objectPos: "center",
    textColor: "rgba(0,0,190,.9)",
  },
  {
    id: 3,
    img: "https://static-geektopia.com/storage/t/i/441/44123/geforce_gt_1030_3qtr_fron.webp",
    title: "Low End Gaming",
    description: "HIGH QUALITY PRODUCTS.",
    bg: "#ffffff",
    objectPos: "center",
    textColor: "rgba(0,190,0,.9)",
  },
];
export const categories = [
  {
    id: 1,
    img: "https://i.blogs.es/4f2130/memoria/1366_2000.jpg",
    title: "COMPONENTS",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/fc/ce/75/fcce75d6b896e0604c503b345d50b520.jpg",
    title: "PERIPHERALS",
  },
  {
    id: 3,
    img: "https://as01.epimg.net/meristation/imagenes/2021/08/24/noticias/1629823415_799751_1629826644_noticia_normal.jpg",
    title: "GAMES",
  },
];

export interface popularProductType {
  id: number;
  img: string;
}
export const popularProducts: popularProductType[] = [
  {
    id: 1,
    img: "https://wiztech.com.ar/assets/images/products/procesador/amd_ryzen_9_5950x_a.png",
  },
  {
    id: 2,
    img: "https://www.pny.eu/data/products/article-large/1526-20210528172558.png",
  },
  {
    id: 3,
    img: "https://i1.wp.com/www.dxbolivia.com/wp-content/uploads/2021/06/dxracer-serie-p-rojo-1.png?fit=800%2C800&ssl=1",
  },
  {
    id: 4,
    img: "https://dlcdnwebimgs.asus.com/gain/69765405-0863-4693-b7b8-a84ded72c4cc/w800",
  },
  {
    id: 5,
    img: "https://www.ozeros.com/wp-content/uploads/2018/01/msi-optix_mpg27cq-product_photo-3d1_preview.png",
  },
  {
    id: 6,
    img: "https://www.mtec-ec.com/wp-content/uploads/2019/11/1809101046310.png",
  },
  {
    id: 7,
    img: "https://static.acer.com/up/Resource/Acer/Accessories/Nitro/Nitro_Keyboard/Photogallery/20210601/1/Nitro_Keyboard_TKL_04.png",
  },
  {
    id: 8,
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/g733-fob-lilac1-68cafe81aad023fd2116154845139496-640-0.png",
  },
  {
    id: 9,
    img: "https://www.venex.com.ar/products_images/1532119672_234.jpg",
  },
];
