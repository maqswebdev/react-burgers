import { useDispatch, useSelector } from "react-redux";
import { removeFromOrder } from "../store/actions/orders";
import { Delivery } from "./index";

const Order = () => {
  const dispatch = useDispatch();

  const { burgers } = useSelector(({ burgers }) => burgers);

  const items = useSelector(({ orders }) => orders.items);
  const itemsIds = Object.keys(items);

  const orderBurgersList = burgers.filter((burger) => {
    return itemsIds.includes(burger.id.toString());
  });

  const totalPrice = orderBurgersList.reduce((total, burger) => {
    if (burger.status === "available") {
      return total + burger.price * items[burger.id].totalCount;
    } else {
      return total;
    }
  }, 0);

  const onRemoveClick = (id) => {
    dispatch(removeFromOrder(id));
  };

  return (
    <div className="order-wrap">
      <h2>Ваш Заказ</h2>
      {orderBurgersList.length ? (
        <>
          <ul className="order">
            {orderBurgersList.map((burger) =>
              // is Burger Avaiable ?
              burger.status === "available" ? (
                <li key={burger.name}>
                  <span>
                    <span>{items[burger.id].totalCount}</span>
                    шт. {burger.name}
                    <span> {burger.price * items[burger.id].totalCount} ₽</span>
                    <button
                      className="cancellItem"
                      onClick={() => onRemoveClick(burger.id)}
                    >
                      &times;
                    </button>
                  </span>
                </li>
              ) : (
                <li className="unavailable" key={burger.name}>
                  Извините, {burger ? burger.name : "бургер"} временно
                  недоступен.
                </li>
              )
            )}
          </ul>
          <Delivery total={totalPrice} />
        </>
      ) : (
        <div className="nothingSelected">
          Выберите блюдо и добавьте к заказу!
        </div>
      )}
    </div>
  );
};

export default Order;
