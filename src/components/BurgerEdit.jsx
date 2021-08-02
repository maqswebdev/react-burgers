import { useDispatch } from "react-redux";
import { removeBurger, updateBurger } from "../store/actions/burgers";

const BurgerEdit = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, desc, price, status, image } = item;

  const onClickRemoveButton = () => {
    dispatch(removeBurger(id));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.currentTarget;
    const updatedItem = {
      id,
      [name]: value,
    };
    dispatch(updateBurger(updatedItem));
  };

  return (
    <div className="burger-edit">
      <input name="name" type="text" value={name} onChange={handleOnChange} />
      <input name="price" type="text" value={price} onChange={handleOnChange} />
      <select
        name="status"
        className="status"
        value={status}
        onChange={handleOnChange}
      >
        <option value="available">Доступно</option>
        <option value="unavailable">Не доступно</option>
      </select>
      <textarea name="desc" value={desc} onChange={handleOnChange}></textarea>
      <input name="image" type="text" value={image} onChange={handleOnChange} />
      <button onClick={onClickRemoveButton}>Удалить из меню</button>
    </div>
  );
};

export default BurgerEdit;
