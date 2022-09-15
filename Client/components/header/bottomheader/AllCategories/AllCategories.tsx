import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import style from '../../../../styles/components/bottomNav/allcategories.module.scss';
import { Image, Link } from '../../../../utils/commonImports';

export default function AllCategories({ layerProps }: any) {
  const categories = [
    {
      name: 'Fruits',
      image: '/images/categories/category-1.svg',
    },
    {
      name: 'Clothing & Beauty',
      image: '/images/categories/category-3.svg',
    },
    {
      name: 'Pet Foods',
      image: '/images/categories/category-4.svg',
    },
    {
      name: 'Baking Material',
      image: '/images/categories/category-2.svg',
    },
    {
      name: 'Chocolates',
      image: '/images/categories/category-5.svg',
    },
    {
      name: 'Drinks',
      image: '/images/categories/category-6.svg',
    },
    {
      name: 'Organic Foods',
      image: '/images/categories/category-7.svg',
    },
    {
      name: 'Fast Foods',
      image: '/images/categories/category-9.svg',
    },
    {
      name: 'Cakes',
      image: '/images/categories/category-8.svg',
    },
    {
      name: 'Sea Foods',
      image: '/images/categories/category-10.svg',
    },
    {
      name: 'Cooking Essentials',
      image: '/images/categories/icon-1.svg',
    },
    {
      name: 'Milk and Dairy',
      image: '/images/categories/icon-1.svg',
    },
    {
      name: 'Snacks',
      image: '/images/categories/icon-1.svg',
    },
    {
      name: 'Jam & Jelly',
      image: '/images/categories/icon-1.svg',
    },
  ];

  const [showMore, setShowMore] = useState(10);
  return (
    <div {...layerProps} className={style.allCategories}>
      {categories?.map((cat: { name: string; image: string }, i) => (
        <Collapse orientation="vertical" in={i < showMore} timeout={500}>
          <Link href={`/products?category=${cat.name}`}>
            <div className={style.singleCategory}>
              <Image src={cat.image} width="25%" height={30} />
              <p>{cat.name}</p>
            </div>
          </Link>
        </Collapse>
      ))}

      {categories.length <= showMore ? (
        <button className={style.button} type="button" onClick={() => setShowMore(showMore - 5)}>
          <AiOutlineMinusCircle size={22} color="#3bb77e" /> Show Less...
        </button>
      ) : (
        <button className={style.button} type="button" onClick={() => setShowMore(showMore + 5)}>
          <ControlPointIcon sx={{ color: 'myColor.main' }} /> Show More...
        </button>
      )}
    </div>
  );
}
