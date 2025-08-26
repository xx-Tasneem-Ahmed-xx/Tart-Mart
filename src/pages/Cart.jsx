import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "@/store/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import { setCheckoutItems } from "@/store/checkoutSlice";
import Loader from "@/components/shared/Loader";
import NotFound404 from "@/pages/NotFound404";
import PriceSummary from "@/components/shared/PriceSummary";
import { XIcon, ArrowUp, ArrowDown } from "lucide-react";
export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  if (status === "loading" || !products || !cartItems) return <Loader />;
  if (status === "failed") return <NotFound404 />;

  const getCartWithDetails = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return "";

    return {
      ...item,
      title: product?.title,
      image: product.image,
      price: product.price,
    };
  });

  const subtotal = getCartWithDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const details = [
    { title: "Subtotal:", value: subtotal },
    { title: "Shipping:", value: shipping },
    { title: "Total:", value: subtotal + shipping },
  ];

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ productId }));
  };
  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };
  const gridHeaders = ["Product", "Price", "Quantity", "SubTotal"];
  return (
    <section className="w-9/12 px-4 sm:px-8 lg:px-16">
      <div className="grid gap-6 w-full grid-cols-[15vw_auto_auto_auto] justify-around items-center shadow-md p-5 rounded-md">
        {gridHeaders.map((header, index) => (
          <p key={index}>{header}</p>
        ))}
        {getCartWithDetails.map((item, index) => (
          <>
            <div
              key={index}
              className="flex items-center gap-2 w-full relative"
            >
              <XIcon
                className="absolute bg-[#DB4444] rounded-full top-0 hover:cursor-pointer"
                size={16}
                color="white"
                onClick={() => handleRemove(item.productId)}
              />
              <img src={item.image} alt={item.title} className="size-15" />
              <p className="hidden md:inline-block ml-2 text-sm truncate">
                {item.title}
              </p>
            </div>
            <p>{item.price}$</p>
            <div className="border-1 border-[#999999] p-1 text-center rounded-sm flex justify-around">
              {item.quantity}
              <div className="hover:cursor-pointer">
                <ArrowUp
                  size={12}
                  onClick={() =>
                    handleQuantityChange(
                      item.productId,
                      Number(item.quantity + 1)
                    )
                  }
                />
                <ArrowDown
                  size={12}
                  onClick={() =>
                    handleQuantityChange(
                      item.productId,
                      Number(item.quantity - 1)
                    )
                  }
                />
              </div>
            </div>
            <p>
              $
              {(item.price * item.quantity).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </>
        ))}
        <div className="w-full flex justify-between col-span-4">
          {["Return To Shop", "Update Cart"].map((item, index) => (
            <button
              key={index}
              className="md:p-2.5 w-2/5 md:w-1/5 border-1 border-[#999999] rounded-sm font-medium hover:cursor-pointer"
              onClick={() => {
                index === 0 ? navigate("/") : "";
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 md:gap-y-0 items-start justify-between mt-15">
        <div className="flex w-full md:w-1/3 gap-x-2">
          <input
            type="text"
            name="coupon"
            placeholder="Coupon Code"
            className="rounded-md p-2 border-black border-1 w-3/5"
          />
          <button className="w-2/5 bg-[#db4444] rounded-sm p-2 text-white hover:cursor-pointer">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col w-full md:w-2/5 border-2 border-black rounded-sm p-5">
          <h3 className="font-medium text-xl mb-3">Cart Total</h3>
          <PriceSummary details={details} />
          <button
            className="self-center bg-[#db4444] rounded-sm text-white w-1/2 p-2 mt-3 hover:cursor-pointer"
            onClick={() => {
              navigate("/checkout");
              dispatch(setCheckoutItems(cartItems));
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
