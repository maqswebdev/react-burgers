import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header, Burger, Order, MenuAdmin } from "../components";
import { fetchBurgers } from "../store/actions/burgers";
import { selectRestautant } from "../store/actions/restaurants";

const Restaurant = () => {
  const { restaurantUrl } = useParams();
  const { selectedRestaurant } = useSelector(({ restaurants }) => restaurants);
  const { burgers } = useSelector(({ burgers }) => burgers);
  const dispatch = useDispatch();

  const getCurrentRestaurant = async (url) => {
    const response = await axios(`/restaurants?url=${url}`).catch((err) => {
      console.log("Error", err);
    });
    dispatch(selectRestautant(response.data[0]));
  };

  useEffect(() => {
    if (!selectedRestaurant) getCurrentRestaurant(restaurantUrl);
    dispatch(fetchBurgers());
  }, [restaurantUrl]);

  return (
    <>
      {selectedRestaurant ? (
        <div className="burger-paradise">
          <div className="menu">
            <Header title={selectedRestaurant.title} />
            <ul className="burgers">
              {burgers
                ? burgers.map((burger) => (
                    <Burger item={burger} key={burger.name} />
                  ))
                : "Загрузка"}
            </ul>
          </div>
          <Order />
          <MenuAdmin />
        </div>
      ) : (
        "Загрузка"
      )}
    </>
  );
};

export default Restaurant;
