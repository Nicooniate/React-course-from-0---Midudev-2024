import { products as initialProducts } from "./mocks/productos.json";
import { Products } from "./Components/Products";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { useFilters } from "./hooks/useFIlters";
import { Cart } from "./Components/Cart";
import { CartProvider } from "./context/Cart";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
