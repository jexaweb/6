import Productlist from "../components/Productlist";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");

  return (
    <section className="p-4">
      {isPending && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {products && <Productlist products={products.products} />}
    </section>
  );
}

export default Home;
