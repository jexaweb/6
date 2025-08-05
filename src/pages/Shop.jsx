import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import Shopg from "./Shopg";

function Shop() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  return (
    <div>
      {products.length === 0 ? (
        <p className="text-2xl text-center mt-[100px] italic">
          No products in the !
        </p>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-2xl font-semibold">
              Total Price:{"  "}
              <span className="text-red-400">{formatPrice(totalPrice)}</span>
            </h3>
            <button
              onClick={() => dispatch({ type: "CLEAR", payload: products })}
              className="btn btn-outline btn-secondary"
            >
              Clear All
            </button>
          </div>

          {products.map((product) => {
            return <Shopg key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Shop;
