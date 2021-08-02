import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchRestaurants,
  selectRestautant,
} from "../store/actions/restaurants";

const Landing = () => {
  const dispatch = useDispatch();
  const { restaurants, selectedRestaurant } = useSelector(
    ({ restaurants }) => restaurants
  );
  const [listStatus, setListStatus] = useState(false);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const onClickToSelect = () => {
    setListStatus(!listStatus);
  };

  const onClickToRestauran = (obj) => {
    dispatch(selectRestautant(obj));
    setListStatus(!listStatus);
  };

  return (
    <div className="restaurant_select">
      <div className="restaurant_select_top" onClick={onClickToSelect}>
        <div className="restaurant_select_top-header font-effect-outline">
          {selectedRestaurant ? selectedRestaurant.title : "Выберите ресторан"}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>
      {listStatus && (
        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurant) => (
              <li
                onClick={() => onClickToRestauran(restaurant)}
                key={restaurant.title}
              >
                {restaurant.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!listStatus && selectedRestaurant ? (
        <Link to={`/restaurant/${selectedRestaurant.url}`} className="button">
          Перейти в ресторан
        </Link>
      ) : null}
    </div>
  );
};

export default Landing;
