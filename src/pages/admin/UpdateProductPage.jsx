import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    productImageUrl1: "",
    productImageUrl2: "",
    productImageUrl3: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        productImageUrl1: product?.productImageUrl1,
        productImageUrl2: product?.productImageUrl2,
        productImageUrl3: product?.productImageUrl3,
        category: product?.category,
        description: product?.description,
        time: product?.time,
        date: product?.date,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div className="font-serif">
      <div className="flex justify-center items-center h-screen border-cyan-300 bg-cyan-200">
        {loading && <Loader />}
        {/* Login Form  */}
        <div
          className="login_Form bg-cyan-50 px-8 py-6 rounded-xl shadow-md  hover:shadow-cyan-700 border-cyan-200 border-2  hover:shadow-xl"
          data-aos="zoom-in"
        >
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-cyan-500 ">
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl1"
              value={product.productImageUrl1}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl1: e.target.value,
                });
              }}
              placeholder="Product Image Url 1"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl2"
              value={product.productImageUrl2}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl2: e.target.value,
                });
              }}
              placeholder="Product Image Url 2"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl3"
              value={product.productImageUrl3}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl3: e.target.value,
                });
              }}
              placeholder="Product Image Url 3"
              className="bg-cyan-50 border text-cyan-300 border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-300"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-cyan-300 bg-cyan-50 border border-cyan-200 rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-cyan-300 bg-cyan-50 border border-cyan-200 rounded-md outline-none placeholder-cyan-300 "
            ></textarea>
          </div>

          {/* Update Product Button  */}
          <div className="mb-3">
            <button
              onClick={updateProduct}
              type="button"
              className="bg-cyan-500 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
