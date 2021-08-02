const Delivery = ({ total }) => {
  const deliveryPrice = total > 500 ? 99 : 500;
  return (
    <div className="total">
      {total !== 0 ? (
        <div className="total_wrap">
          <div>
            <div>Доставка: {deliveryPrice} ₽</div>
            {total < deliveryPrice ? (
              <div className="total_wrap-free">
                Закажите еще на {deliveryPrice - total} ₽ для доставки за 99 ₽
              </div>
            ) : null}
          </div>
          <div className="total_wrap-final">
            Итого: {total + deliveryPrice} ₽
          </div>
        </div>
      ) : (
        <div className="total_wrap">Вы ничего не выбрали</div>
      )}
    </div>
  );
};

export default Delivery;
