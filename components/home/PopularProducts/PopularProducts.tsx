import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import data from '../../../FakeData/Data';
import PopularSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/Home/popularproducts.module.scss';

export default function PopularProducts() {
    type iProducts = {
        title: string;
        onSale: boolean;
        vendorName: string;
        actualPrice: number;
        offerPrice: number;
        id: string;
        ratings: number;
        image: string;
        category: string;
    };

    const [products, setProducts] = useState<iProducts[]>([]);

    useEffect(() => {
        const filteredProducts = data.filter((d) => {
            if (d.featured.indexOf('popular') === -1) {
                return false;
            }
            return true;
        });
        const newProducts = filteredProducts.map((p) => {
            const modified = {
                title: p.title,
                onSale: p.onSale,
                vendorName: 'NestFood',
                actualPrice: p.price,
                offerPrice: p.offerPrice,
                id: p.id,
                ratings: 4.5,
                image: p.images[0],
                category: p.category,
            };
            return modified;
        });

        setProducts(newProducts);
    }, []);

    return (
        <div className={styles.popularProductsContainer}>
            <div className={styles.heading}>
                <h1>Popular Products</h1>
                <div className={styles.subCategories}>
                    <p>All</p>
                    <p>Milks & Dairies</p>
                    <p>Coffee & Teas</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
            </div>
            <div className={styles.allProducts}>
                {products.length > 0
                    ? products.map((p) => (
                          <div className={styles.singleProduct} key={p.id + Math.random()}>
                              <span className={styles.onSale}>On Sale</span>
                              <div className={styles.image}>
                                  <Image src={p.image} width={244} height={244} />
                              </div>
                              <small className={styles.category}>{p.category}</small>
                              <h3 className={styles.title}>{p.title}</h3>
                              <Rating name="read-only" value={p.ratings} precision={0.1} readOnly />
                              <p>
                                  By <span>{p.vendorName}</span>
                              </p>
                              <div className={styles.bottom}>
                                  <h2>${p.offerPrice}</h2>
                                  <del>${p.actualPrice}</del>

                                  <button type="button" className={styles.button}>
                                      <FiShoppingCart /> Add
                                  </button>
                              </div>
                          </div>
                      ))
                    : Array(5)
                          .fill(null)
                          // eslint-disable-next-line react/no-array-index-key
                          .map((p, i) => <PopularSk key={i} />)}
            </div>
        </div>
    );
}
