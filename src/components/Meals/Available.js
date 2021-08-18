import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm3',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm4',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm5',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
  {
    id: 'm6',
    name: 'Sushi',
    description: 'Finest fish meal ever',
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section>
      <Card>
        kkkkkk
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
