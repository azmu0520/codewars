import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styled from 'styled-components';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Osh',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Qotirma',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm3',
    name: 'Honim',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm4',
    name: 'Baliq',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm5',
    name: 'Chuchvara',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm6',
    name: 'Pirashka',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.key}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section>
      <Card>
        <Ul>{mealsList}</Ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

const Ul = styled.ul`
  list-style: none;
`;
