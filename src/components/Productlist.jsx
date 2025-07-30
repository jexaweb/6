import { Link } from "react-router-dom";
// import Product from "../components/Product";
import Footer from "../components/Footer";

function ProductList({ products }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {products.map((prod) => (
          <Link
            key={prod.id}
            to={`/singleProduct/${prod.id}`}
            className="border p-4 rounded shadow hover:shadow-lg neutral "
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="w-full h-80  rounded mb-3"
            />
            <h3 className="text-lg font-bold hover:text-sky-800">
              {prod.title}
            </h3>
            <p className="line-clamp-2 mt-0.5">{prod.description}</p>
            <div className="flex justify-center gap-10">
              <p className="text-2xl text-red-400 mt-1">
                <span className="text-neutral-400">Price: </span> ${prod.price}
              </p>
              <button className="btn btn-soft mt-1">
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
              </button>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
