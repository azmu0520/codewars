import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './Available';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
