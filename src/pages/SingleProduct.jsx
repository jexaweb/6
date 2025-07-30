import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/products/" + id)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
    <>
      {product && (
        // <div>
        //   <h1>{product.title}</h1>

        //   <img src={product.thumbnail} alt="" />
        // </div>

        <div
          className="min-h-screen bg-cover bg-center p-10 pl-auto w-full"
          style={{
            backgroundImage:
              "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGVxOWY5cTdjN2VoeGZ2ODA0b2gzN2swcThoNGI2emN0Mm9xbzM1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/gOKLnHAbgCQtAd7zOw/giphy.gif')",
          }}
        >
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center text-sky-800">
              {product.title}
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-[rgba(14,16,14,0.8)] p-6 rounded shadow-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full md:w-1/2 rounded-lg object-cover"
              />

              <div className="flex-1 space-y-4">
                <p className=" text-white">
                  <span className="font-semibold text-zinc-500">Brand:</span>{" "}
                  {product.brand}
                </p>
                <p className=" text-white">
                  <span className="font-semibold  text-zinc-500">
                    Category:
                  </span>{" "}
                  {product.category}
                </p>
                <p className="text-white">
                  <span className="font-semibold  text-zinc-500">
                    Description:
                  </span>{" "}
                  {product.description}
                </p>
                <p className="text-yellow-600">⭐⭐⭐⭐ {product.rating}</p>
                <div className="rating">
                  {/* {product.rating} */}
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
                <div className="flex justify-center gap-5">
                  {" "}
                  <p className="text-green-600 text-xl font-bold mt-2">
                    ${product.price}
                  </p>
                  {/* <button className="btn btn-soft mt-1">
                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                  </button> */}
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
