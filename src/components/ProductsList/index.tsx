import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/context";
import { Container, Div } from "./styles";
import { ProductCard } from "../ProductCard";
import { Loading } from "../Loading";
import { filterByCategory } from "../../utils/filterProducts";
import { SecondaryButton } from "../SecondaryButton";

const ProductsList = () => {
  const { products, filter, addProducts } = useContext(Context);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (setProducts) {
  //       setProducts(productsMock.reverse());
  //     }
  //   }, 500);
  // }, []);

  useEffect(() => {
    const url = `${process.env.API_URL}/products?limit=8&offset=${offset}`;
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      const reversedData = data.reverse();
      addProducts && addProducts(reversedData);
      setOffset(offset + 8);
      setLoading(false);
    })();
  }, []);

  const handleLoadMore = async () => {
    if (offset > 32) return;
    setLoading(true);
    const url = `${process.env.API_URL}/products?limit=8&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    addProducts && addProducts(data);
    setOffset(offset + 8);
    setLoading(false);
  };

  if (products) {
    return (
      <Container>
        <Div>
          {!filter &&
            products.map((product) => (
              <ProductCard {...product} key={product._id} />
            ))}
          {filter && filterByCategory(products, ProductCard, filter)}
        </Div>
        {loading && <Loading />}
        <SecondaryButton
          onClick={handleLoadMore}
          className="load-more"
          disabled={offset > 32}
        >
          Load more items
        </SecondaryButton>
      </Container>
    );
  }
};

export { ProductsList };

// const productsMock = [
//   {
//     _id: "61f496ca18ad60c910b5a18b",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Women Jeans",
//     price: 50,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418032/free-market/womens_jeans_vfptqs.jpg",
//     createdAt: "2022-01-29T01:22:18.024Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4aa85b08b40ed20c02bc1",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Women Shorts",
//     price: 35,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418032/free-market/womens_shorts_b5a8vp.jpg",
//     createdAt: "2022-01-29T02:46:29.879Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4aae2b08b40ed20c02bc7",
//     category: "61f4960f18ad60c910b5a183",
//     name: "Zelda Figure",
//     price: 30,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418032/free-market/zelda_figure_e2ldch.jpg",
//     createdAt: "2022-01-29T02:48:02.428Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ab698e214a7df4dfe7de",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Sony Bluetooth Speaker",
//     price: 75,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/sony_speaker_wbiagz.jpg",
//     createdAt: "2022-01-29T02:50:17.789Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4abce8e214a7df4dfe7e8",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Womens Red Shirt",
//     price: 38,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/womens_shirt_gfhgbx.jpg",
//     createdAt: "2022-01-29T02:51:58.599Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ac378e214a7df4dfe7f2",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Womens Denim Shirt",
//     price: 45,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/womens_denim_shirt_sqytbv.jpg",
//     createdAt: "2022-01-29T02:53:43.647Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ac7d8e214a7df4dfe7f9",
//     category: "61f4960218ad60c910b5a181",
//     name: "Tolix Chair",
//     price: 65,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/tolix_chair_cp9dry.jpg",
//     createdAt: "2022-01-29T02:54:53.634Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4acca8e214a7df4dfe801",
//     category: "61f4960218ad60c910b5a181",
//     name: "Tulip Chair",
//     price: 77,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/tulip_chair_ecy6hr.jpg",
//     createdAt: "2022-01-29T02:56:10.249Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ad128e214a7df4dfe809",
//     category: "61f4960f18ad60c910b5a183",
//     name: "Mario Action Figure",
//     price: 80,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/super_mario_toy_cd1t4t.jpg",
//     createdAt: "2022-01-29T02:57:22.720Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ad988e214a7df4dfe811",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Samsung Smart TV",
//     price: 570,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/samsung_smart_tv_wgsk2q.jpg",
//     createdAt: "2022-01-29T02:59:36.743Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4adf88e214a7df4dfe817",
//     category: "61f4960218ad60c910b5a181",
//     name: "Shremwood Chair",
//     price: 78,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/shremwood_chair_pf2fie.jpg",
//     createdAt: "2022-01-29T03:01:12.883Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ae318e214a7df4dfe81d",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Laptop Sony Vaio",
//     price: 187,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418031/free-market/sony_vaio_eychv2.jpg",
//     createdAt: "2022-01-29T03:02:09.510Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4ae8c8e214a7df4dfe823",
//     category: "61f4960f18ad60c910b5a183",
//     name: "Pikachu Pop Figure",
//     price: 20,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/pikachu_pop_toys_ms5pci.jpg",
//     createdAt: "2022-01-29T03:03:40.308Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4aedc8e214a7df4dfe82b",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Samsung S20 FE",
//     price: 247,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/samsung_s20fe_iczwjh.jpg",
//     createdAt: "2022-01-29T03:05:00.325Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4af478e214a7df4dfe831",
//     category: "61f4960218ad60c910b5a181",
//     name: "Platinum Desktop",
//     price: 87,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/platinum_desktop_n4gpfr.jpg",
//     createdAt: "2022-01-29T03:06:47.037Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4af8d8e214a7df4dfe837",
//     category: "61f4960218ad60c910b5a181",
//     name: "Relax Time Bed",
//     price: 115,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/relax_bed_epdef7.jpg",
//     createdAt: "2022-01-29T03:07:57.514Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4afca8e214a7df4dfe83b",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Phillips Headset",
//     price: 33,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/phillips_headset_jvrewu.jpg",
//     createdAt: "2022-01-29T03:08:58.458Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b0158e214a7df4dfe841",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Nike Air Zoom",
//     price: 72,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418030/free-market/nike_air_zoom_l4qp00.jpg",
//     createdAt: "2022-01-29T03:10:13.408Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b0458e214a7df4dfe845",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Nike City",
//     price: 65,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/nike_city_id7oij.jpg",
//     createdAt: "2022-01-29T03:11:01.613Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b07c8e214a7df4dfe849",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Mans Shorts",
//     price: 18,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/mans_shorts_kwy68f.jpg",
//     createdAt: "2022-01-29T03:11:56.886Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b0e08e214a7df4dfe84f",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Mavic Drone",
//     price: 1270,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/mavic_drone_rkdfxt.jpg",
//     createdAt: "2022-01-29T03:13:36.028Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b1458e214a7df4dfe855",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Mans Blue Shirt",
//     price: 25,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/mans_shirt2_iqmp0f.jpg",
//     createdAt: "2022-01-29T03:15:17.143Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b1798e214a7df4dfe85b",
//     category: "61f4960f18ad60c910b5a183",
//     name: "Luiggi Action Figure",
//     price: 7,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/luigi_toys_px7zrr.jpg",
//     createdAt: "2022-01-29T03:16:09.126Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b1b28e214a7df4dfe861",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Mans Purple Shirt",
//     price: 33,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/mans_shirt_qbrfsj.jpg",
//     createdAt: "2022-01-29T03:17:06.242Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b1e98e214a7df4dfe865",
//     category: "61f495e118ad60c910b5a17c",
//     name: "Mans Joggins",
//     price: 37,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/mans_joggins_qbabgo.jpg",
//     createdAt: "2022-01-29T03:18:01.331Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b2348e214a7df4dfe86b",
//     category: "61f4960f18ad60c910b5a183",
//     name: "Link Figure",
//     price: 43,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/link_figure_vefacy.jpg",
//     createdAt: "2022-01-29T03:19:16.604Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b2648e214a7df4dfe871",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "LG Velvet",
//     price: 43,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/lg_velvet_i4y9ee.jpg",
//     createdAt: "2022-01-29T03:20:04.575Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b2ae8e214a7df4dfe875",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "MacBook Pro",
//     price: 1500,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418029/free-market/macbook_f5u7yx.jpg",
//     createdAt: "2022-01-29T03:21:18.224Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b2d78e214a7df4dfe879",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Iphone 11",
//     price: 384,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/iphone_11_j2mg8p.jpg",
//     createdAt: "2022-01-29T03:21:59.484Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b3128e214a7df4dfe87d",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Dell Laptop",
//     price: 1350,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/dell_laptop_rebfkv.jpg",
//     createdAt: "2022-01-29T03:22:58.364Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b3468e214a7df4dfe881",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "JBL Bluetooth Speaker",
//     price: 250,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/jbl_bluetooth_speaker_soovyc.jpg",
//     createdAt: "2022-01-29T03:23:50.125Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b3998e214a7df4dfe887",
//     category: "61f4960218ad60c910b5a181",
//     name: "Box Base Sommier",
//     price: 880,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/box_base_sommier_s5y564.jpg",
//     createdAt: "2022-01-29T03:25:13.496Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b3f68e214a7df4dfe88b",
//     category: "61f4960218ad60c910b5a181",
//     name: "SuOffice Desktop",
//     price: 223,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/desktop_suoffice_b1tmma.jpg",
//     createdAt: "2022-01-29T03:26:46.934Z",
//     __v: 0,
//   },
//   {
//     _id: "61f4b42a8e214a7df4dfe88f",
//     category: "61f495ee18ad60c910b5a17f",
//     name: "Apple Airpods",
//     price: 160,
//     image:
//       "https://res.cloudinary.com/lucianocavallo/image/upload/v1643418028/free-market/apple_airpods_yywxfr.jpg",
//     createdAt: "2022-01-29T03:27:38.904Z",
//     __v: 0,
//   },
// ];
