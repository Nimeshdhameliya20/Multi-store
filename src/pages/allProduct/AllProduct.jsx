import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const AllProduct = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="py-8 font-serif">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold text-cyan-900">
            All Products
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto ">
            <div className="flex justify-center ">{loading && <Loader />}</div>
            <div className="flex flex-wrap -m-4 ">
              {getAllProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                return (
                  <div
                    key={index}
                    className="p-4 w-full md:w-1/4 hover:shadow-md rounded-xl rounded-bl-extraLarge rounded-br-extraLarge rounded-tl-extraLarge rounded-tr-extraLarge"
                  >
                    <div
                      className="h-full border-cyan-600  border-xl border bg-cyan-50 rounded-xl overflow-hidden shadow-md cursor-pointer hover:bg-cyan-100 object-cover rounded-bl-extraLarge rounded-br-extraLarge rounded-tl-extraLarge rounded-tr-extraLarge"
                      data-aos="fade-up"
                    >
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-80  h-96 w-full"
                        src={productImageUrl}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">
                          Multi-store
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          ₹{price}
                        </h1>

                        <div className="flex justify-center ">
                          {cartItems.some((p) => p.id === item.id) ? (
                            <button
                              onClick={() => deleteCart(item)}
                              className=" bg-red-500 hover:bg-cyan-800 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Delete From Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-cyan-500 hover:bg-cyan-800 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Add To Cart
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
    </Layout>
  );
};

export default AllProduct;
