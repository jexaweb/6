import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shopg({ product }) {
  const { dispatch } = useGlobalContext();

  const increment = (e) => {
    e.preventDefault();
    dispatch({ type: "INCREASE_AMOUNT", payload: product.id });
  };

  const decrement = (e) => {
    e.preventDefault();

    if (product.amount === 1) {
      let req = window.confirm(
        "Rostan ham ushbu mahsulotni o'chirmoqchimisiz?"
      );
      if (!req) return;
    }

    toast.success("Mahsulot muvaffaqiyatli Bita Kamaydi!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    dispatch({ type: "DECREASE_AMOUNT", payload: product.id });
  };

  return (
    <div className=" mb-10 mt-10 bg-blue-500 hover:shadow-xl/30 pt-8 pb-8 pr-10 flex  rounded-lg  flex justify-between">
      {" "}
      <Link to={`/singleProduct/${product.id}`}>
        <div className="flex">
          {" "}
          <img src={product.thumbnail} alt="" width={120} height={100} />
          <h5 className="text-3xl mt-20 mb-20 truncate w-70 text-white">
            {product.title}
          </h5>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-5">
        <span className="text-3xl text-red-400">
          price: {formatPrice(product.amount * product.price)}
        </span>
        <button className="btn btn-accent" onClick={increment}>
          {" "}
          &#43;
        </button>
        <span className=" text-2xl text-white">{product.amount}</span>
        <button className="btn btn-accent" onClick={decrement}>
          {" "}
          &#8722;
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Shopg;
