import axios from "axios";
import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import { listCategory } from "../api/Category";


const ecomStore = (set) => ({
  name: null,
  value: null,
  categories :[],
  actionLogin: async (form) => {
    //code
    const res = await axios.post("http://localhost:5001/api/login", form);
    set({
        user: res.data.payload,
        token: res.data.token
    })
    return res;
  },
   getCategory : async (token) => {
      try {
        const res = await listCategory(token);
        set({categories: res.data});
      } catch (err) {
        console.log(err);
      }
    }
});


const usePersist ={
    name: 'ecom-store',
    Storage: createJSONStorage(()=>localStorage)

}
const useEcomStore = create(persist(ecomStore,usePersist))
export default useEcomStore;
