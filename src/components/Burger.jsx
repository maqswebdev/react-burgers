import { useDispatch } from "react-redux";
import { addToOrder } from "../store/actions/orders";

const Burger = ({ item }) => {
  const dispatch = useDispatch();

  const { id, name, desc, image, price, status } = item;
  const isAvailable = status === "available";

  const onOrderClick = () => {
    dispatch(addToOrder(id));
  };

  return (
    <li className="menu-burger">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="burger-details">
        <h3 className="burger-name">
          {name}
          <span className="price">{price} ₽</span>
        </h3>
        <p>{desc}</p>
        <button
          className="buttonOrder"
          disabled={!isAvailable}
          onClick={onOrderClick}
        >
          {isAvailable ? "Заказать" : "Временно нет"}
        </button>
      </div>
    </li>
  );
};

export default Burger;
