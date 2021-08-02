import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addBurger } from "../store/actions/burgers";

const AddBurger = () => {
  const dispatch = useDispatch();

  const name = useRef();
  const price = useRef();
  const status = useRef();
  const desc = useRef();
  const image = useRef();

  const onSubmitAddBurger = (event) => {
    event.preventDefault();

    const burgerName = name.current.value;
    const burgerPrice = parseFloat(price.current.value) || 0;
    const burgerStatus = status.current.value;
    const burgerDesc = desc.current.value;
    const burgerImage = image.current.value;

    if (burgerName) {
      const burger = {
        id: Date.now(),
        name: burgerName,
        price: burgerPrice,
        status: burgerStatus,
        desc: burgerDesc,
        image: burgerImage,
      };
      dispatch(addBurger(burger));
      event.currentTarget.reset();
    } else {
      alert("Название пустое.");
    }
  };

  return (
    <form className="burger-edit" onSubmit={onSubmitAddBurger}>
      <input
        ref={name}
        name="name"
        type="text"
        placeholder="Name"
        autoComplete="off"
      />
      <input
        ref={price}
        name="price"
        type="text"
        placeholder="Price"
        autoComplete="off"
      />
      <select ref={status} name="status" className="status">
        <option value="available">Доступно</option>
        <option value="unavailable">Недоступно</option>
      </select>
      <textarea ref={desc} name="desc" placeholder="Desc"></textarea>
      <input
        ref={image}
        name="image"
        type="text"
        placeholder="Image"
        autoComplete="off"
      />
      <button type="submit">Добавить в меню</button>
    </form>
  );
};

export default AddBurger;
