import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ prod }) {
  const { dispatch } = useGlobalContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "ADD_PRODUCT", payload: prod });
  // };
  return (
    <Link to={`/singleProduct/${prod.id}`}>
      <h3 className="text-3xl">{prod.title}</h3>
      {/* <button onClick={handleSubmit}>Add To Cart</button> */}
    </Link>
  );
}

export default Product;
