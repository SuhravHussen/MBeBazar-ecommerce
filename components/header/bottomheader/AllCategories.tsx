import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Collapse from '@mui/material/Collapse';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import style from '../../../styles/components/allcategories.module.scss';

export default function AllCategories({ layerProps }: any) {
    const categories = [
        {
            name: 'Milks and Dairies',
            image: '/images/category-1.svg',
        },
        {
            name: 'Clothing & Beauty',
            image: '/images/category-3.svg',
        },
        {
            name: 'Pet Foods',
            image: '/images/category-4.svg',
        },
        {
            name: 'Baking Material',
            image: '/images/category-2.svg',
        },
        {
            name: 'Chocolates',
            image: '/images/category-5.svg',
        },
        {
            name: 'Drinks',
            image: '/images/category-6.svg',
        },
        {
            name: 'Fruits',
            image: '/images/category-7.svg',
        },
        {
            name: 'Fast Foods',
            image: '/images/category-9.svg',
        },
        {
            name: 'Vegetables',
            image: '/images/category-8.svg',
        },
        {
            name: 'Sea Foods',
            image: '/images/category-10.svg',
        },
        {
            name: 'On Sale',
            image: '/images/icon-1.svg',
        },
        {
            name: 'On Sale',
            image: '/images/icon-1.svg',
        },
        {
            name: 'On Sale',
            image: '/images/icon-1.svg',
        },
        {
            name: 'On Sale',
            image: '/images/icon-1.svg',
        },
    ];

    const [showMore, setShowMore] = useState(10);
    console.log(`categories length is ${categories.length} and show more is ${showMore}`);
    return (
        <div {...layerProps} className={style.allCategories}>
            {categories?.map(
                (cat: { name: string; image: string }, i) => (
                    // i < showMore && (
                    <Collapse orientation="vertical" in={i < showMore} timeout={500}>
                        <div className={style.singleCategory}>
                            <Image src={cat.image} width="25%" height={30} />
                            <p>{cat.name}</p>
                        </div>
                    </Collapse>
                )
                // )
            )}

            {categories.length <= showMore ? (
                <button
                    className={style.button}
                    type="button"
                    onClick={() => setShowMore(showMore - 5)}
                >
                    <AiOutlineMinusCircle size={22} color="#3bb77e" /> Show Less...
                </button>
            ) : (
                <button
                    className={style.button}
                    type="button"
                    onClick={() => setShowMore(showMore + 5)}
                >
                    <ControlPointIcon sx={{ color: 'myColor.main' }} /> Show More...
                </button>
            )}
        </div>
    );
}
