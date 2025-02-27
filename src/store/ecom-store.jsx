import axios from "axios";
import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";

const ecomStore = (set) => ({
  name: null,
  value: null,
  actionLogin: async (form) => {
    //code
    const res = await axios.post("http://localhost:5001/api/login", form);
    set({
        user: res.data.payload,
        token: res.data.token
    })
    return res;
  },
});


const usePersist ={
    name: 'ecom-store',
    Storage: createJSONStorage(()=>localStorage)

}
const useEcomStore = create(persist(ecomStore,usePersist))
export default useEcomStore;
