import post from "../APIHooks/POST";

const handleClick = ({ itemName }, totalQuantity, itemtotalPrice) => {
  const data = { itemName, totalQuantity, itemtotalPrice };
  post("http://localhost:3001/cart/postCartItem", data);
};

export default handleClick;
