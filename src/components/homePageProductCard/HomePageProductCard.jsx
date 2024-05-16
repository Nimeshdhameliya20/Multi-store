import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePageProductCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);

  // console.log(cartItems);

  const dispatch = useDispatch();

  // add to cart function
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  // delete from cart function
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10 font-serif">
      {/* Heading  */}
      <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold text-cyan-900 ">
          Bestselling Products
        </h1>
      </div>

      {/* main 1 */}
      <section className="text-gray-600 body-font">
        {/* main 2 */}
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          {/* main 3  */}
          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0, 8).map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div
                  key={index}
                  className="p-3 w-full  rounded-xl hover:shadow-md  md:w-1/4 rounded-bl-extraLarge rounded-br-extraLarge rounded-tl-extraLarge rounded-tr-extraLarge "
                  data-aos="fade-up"
                >
                  <div className="h-full border-cyan-600 border border-xl rounded-xl bg-cyan-50 hover:bg-cyan-100 overflow-hidden shadow-md cursor-pointer object-cover rounded-bl-extraLarge rounded-br-extraLarge rounded-tl-extraLarge rounded-tr-extraLarge ">
                    <img
                      onClick={() => navigate(`/productinfo/${id}`)}
                      className="lg:h-80  h-96 w-full"
                      src={productImageUrl}
                      alt="img"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Multi-store
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-8 ">
                        ₹{price}
                      </h1>

                      <div className="flex justify-center w-30 h-10">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className=" bg-red-700 hover:bg-cyan-600 w-full text-white py-[4px] rounded-lg font-bold"
                          >
                            Delete From Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className=" bg-cyan-500 hover:bg-cyan-600 w-full text-white py-[4px] rounded-lg font-bold"
                          >
                            Add To cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
