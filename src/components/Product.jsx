import { Link } from "react-router-dom";

function Product({ prod }) {
  return (
    <div>
      <Link to={`/singleProduct/${prod.id}`}>
        <h3 className="text-3xl">{prod.title}</h3>
      </Link>
    </div>
  );
}

export default Product;
