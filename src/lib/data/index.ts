import { TCategory } from '../types/index';

export const getCategoriesList = (): TCategory[] => {
  return [
    { id: 1, title: 'medical', productsCount: 5 },
    { id: 2, title: 'agriculture', productsCount: 5 },
    { id: 3, title: 'geologyAndMineralogy', productsCount: 5 },
    { id: 4, title: 'surveillanceAndSecurity', productsCount: 5 },
    { id: 5, title: 'livestockAndPoultry', productsCount: 5 },
    { id: 6, title: 'waterDesalination', productsCount: 5 },
    { id: 7, title: 'meteorologyAndRoadMaintenance', productsCount: 5 }
  ];
};

