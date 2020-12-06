import { action, makeObservable, observable } from "mobx";
import axios from "axios";
class CatgryStore {
  catgrys = [];
  constructor() {
    makeObservable(this, {
      catgrys: observable,
      createCatgry: action,
      fetchCatgrys: action,
    });
  }
  fetchCatgrys = async () => {
    try {
      const response = await axios.get("http://localhost:8000/catgrys");
      this.catgrys = response.data;
    } catch (error) {
      console.log("error line : 16");
    }
  };

  createCatgry = async (newCatgry) => {
    try {
      const res = await axios.post(`http://localhost:8000//catgrys`, formData);
      cd;
      this.catgrys.push(res.data);
    } catch (error) {}
  };
}
const catgryStore = new CatgryStore();
catgryStore.fetchCatgrys();

export default catgryStore;
