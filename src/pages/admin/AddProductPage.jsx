import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

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

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

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
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.productImageUrl1 == "" ||
      product.productImageUrl2 == "" ||
      product.productImageUrl3 == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
  return (
    <div className="font-serif">
      <div className="flex justify-center items-center h-screen bg-cyan-200">
        {loading && <Loader />}
        {/* Login Form  */}
        <div
          className="login_Form bg-cyan-50 px-8 py-6  rounded-xl shadow-md hover:shadow-cyan-700 border-cyan-200 border-2  hover:shadow-xl"
          data-aos="zoom-in"
        >
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-cyan-500 ">
              Add Product
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
              {/* <option disabled>Select Product Category</option> */}
              <option>Select Product Category</option>
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

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type="button"
              className="bg-cyan-500 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md border-cyan-300"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;