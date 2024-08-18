import React from 'react'
import { CategoryItem } from './category-item';

export interface CategoryProps {
   name: string,
   value: string
}

const Categories = ({ item }: {
   item: CategoryProps[]   
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {item.map((category) => (
        <CategoryItem key={category.name} name={category.name} value={category.value}> </CategoryItem>
      ))}
    </div>
  );
}

export default Categories