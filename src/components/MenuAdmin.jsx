import { useSelector } from "react-redux";
import { BurgerEdit, AddBurger } from "./index";

const MenuAdmin = () => {
  const { burgers } = useSelector(({ burgers }) => burgers);
  return (
    <div className="menu-admin">
      <h2>Управление Меню</h2>
      {burgers.length
        ? burgers.map((burger) => (
            <BurgerEdit item={burger} key={burger.name} />
          ))
        : "Загрузка"}
      <AddBurger />
      <button>Загрузить бургеры</button>
    </div>
  );
};

export default MenuAdmin;
