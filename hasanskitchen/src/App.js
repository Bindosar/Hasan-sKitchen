import styles, { Title } from "./styles";
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";
function App() {
  return (
    <>
      <Title>Hasan's Kitchen !</Title>
      <FoodList />
      <FoodDetail />
    </>
  );
}

export default App;
