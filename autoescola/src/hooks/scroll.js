 import { useEffect} from "react";
 
 //função usado para sempre começar a página no topo
 
 export const useScrollToTop = () => {
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, []);
  }