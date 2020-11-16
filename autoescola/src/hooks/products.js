import PlaceholderImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/edinaldo.jpg";
import PlaceholderImage2 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/mineirinho.jpg";
import PlaceholderImage3 from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/miranha.jpg";



const products = [
    {
      id: 1,
      title: "Edinaldo Pereira",
      slang: "edinaldo-pereira",
      summary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
      image: PlaceholderImage,
    },
    {
      id: 2,
      title: "Sabe vuá?",
      slang: "sabe-vua",
      summary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
      image: PlaceholderImage2,
    },
    {
      id: 3,
      title: "Singarro da curse",
      slang: "singarro-da-curse",
      summary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
      image: PlaceholderImage3,
    },
    {
      id: 4,
      title: "Edinaldo de novo",
      slang: "edinaldo-de-novo",
      summary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
      image: PlaceholderImage,
    },
    {
      id: 5,
      title: "asdasd",
      slang: "asdasd",
      summary: "asdmk msjadjlsaldnmasl ldsaldlkmaskmdlkmasmdlmkas asd",
      image: PlaceholderImage3,
    },
  ];

  export const useProducts = () =>{
    return products;
}

export const useProduct = ({slang}) =>{
    return products.find((p) => p.slang === slang);
}
