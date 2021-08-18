const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div> {price} </div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
