import Image from 'next/image';
import { BiCoffee, BiCookie } from 'react-icons/bi';
import { BsCupStraw } from 'react-icons/bs';
import { CgBowl } from 'react-icons/cg';
import { FaAirFreshener, FaBabyCarriage, FaCheese, FaShower, FaWineBottle } from 'react-icons/fa';
import {
    GiBabyBottle,
    GiBeerBottle,
    GiBowlOfRice,
    GiButter,
    GiCakeSlice,
    GiCannedFish,
    GiChipsBag,
    GiChocolateBar,
    GiCoffeeCup,
    GiFlour,
    GiFoodChain,
    GiFruitBowl,
    GiHoneyJar,
    GiHotSpices,
    GiJelly,
    GiLipstick,
    GiPickle,
    GiPotato,
    GiShinyApple,
    GiSlicedBread,
    GiSquareBottle,
    GiTomato,
    // eslint-disable-next-line prettier/prettier
    GiVacuumCleaner
} from 'react-icons/gi';
import { GrIceCream } from 'react-icons/gr';
import { MdCleanHands, MdNaturePeople, MdOutlineLocalLaundryService } from 'react-icons/md';
import { RiOilFill, RiWaterFlashLine } from 'react-icons/ri';
import { ReactNode } from 'react-is/node_modules/@types/react';

export interface iCategories {
    primaryIcon: ReactNode;
    primaryText: string;
    collapses: {
        text: string;
        icon: ReactNode;
    }[];
}

export const catagories: iCategories[] = [
    {
        primaryIcon: (
            <Image src="/images/drawer/vagetables.webp" alt="food" height={20} width={20} />
        ),
        primaryText: 'Fruits and Vegetables',
        collapses: [
            { text: 'Dry Fruits', icon: <GiFruitBowl /> },
            {
                text: 'Fresh Fruits',
                icon: <GiShinyApple />,
            },
            {
                text: 'Fresh Vegetables',
                icon: <GiTomato />,
            },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/seafood.webp" alt="food" height={20} width={20} />,
        primaryText: 'Fresh Seafood',
        collapses: [{ text: 'Fresh Seafood', icon: <GiFoodChain /> }],
    },
    {
        primaryIcon: <Image src="/images/drawer/cooking.webp" alt="food" height={20} width={20} />,
        primaryText: 'Cooking Essentials',
        collapses: [
            { text: 'Oil', icon: <RiOilFill /> },
            { text: 'Rice', icon: <GiBowlOfRice /> },
            { text: 'Flour', icon: <GiFlour /> },
            { text: 'Dry Vegetables', icon: <GiPotato /> },
            { text: 'Spices & Mixes', icon: <GiHotSpices /> },
        ],
    },
    {
        primaryIcon: (
            <Image src="/images/drawer/breakfast.webp" alt="food" height={20} width={20} />
        ),
        primaryText: 'Breakfast',
        collapses: [
            { text: 'Bread', icon: <GiSlicedBread /> },
            { text: 'Cereal', icon: <CgBowl /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/drinks.webp" alt="food" height={20} width={20} />,
        primaryText: 'Drinks',
        collapses: [
            { text: 'Tea', icon: <GiCoffeeCup /> },
            { text: 'Water', icon: <GiSquareBottle /> },
            { text: 'Juice', icon: <BsCupStraw /> },
            { text: 'Coffee', icon: <BiCoffee /> },
            { text: 'Energy Drinks', icon: <FaWineBottle /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/milk.webp" alt="food" height={20} width={20} />,
        primaryText: 'Milk & Dairy',
        collapses: [
            { text: 'Dairy', icon: <FaCheese /> },
            { text: 'Ice Cream', icon: <GrIceCream /> },
            { text: 'Butter & Ghee', icon: <GiButter /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/organic.webp" alt="food" height={20} width={20} />,
        primaryText: 'Organic Food',
        collapses: [{ text: 'Organic Food', icon: <MdNaturePeople /> }],
    },
    {
        primaryIcon: <Image src="/images/drawer/honey.webp" alt="food" height={20} width={20} />,
        primaryText: 'Honey',
        collapses: [{ text: 'Honey', icon: <GiHoneyJar /> }],
    },
    {
        primaryIcon: <Image src="/images/drawer/cooking.webp" alt="food" height={20} width={20} />,
        primaryText: 'Sauces & Pickles',
        collapses: [
            { text: 'Sauces', icon: <GiBeerBottle /> },
            { text: 'Pickles', icon: <GiPickle /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/jam.webp" alt="food" height={20} width={20} />,
        primaryText: 'Jam & Jelly',
        collapses: [{ text: 'Jam & Jelly', icon: <GiJelly /> }],
    },
    {
        primaryIcon: <Image src="/images/drawer/snack.webp" alt="food" height={20} width={20} />,
        primaryText: 'Snacks',
        collapses: [
            { text: 'Chocolate', icon: <GiChocolateBar /> },
            { text: 'Chips & Nuts', icon: <GiChipsBag /> },
            { text: 'Canned Food', icon: <GiCannedFish /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/biscuits.webp" alt="food" height={20} width={20} />,
        primaryText: 'Biscuits & Cakes',
        collapses: [
            { text: 'Cakes', icon: <GiCakeSlice /> },
            { text: 'Biscuits', icon: <BiCookie /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/tools.webp" alt="food" height={20} width={20} />,
        primaryText: 'Household Items',
        collapses: [
            { text: 'Cleaner', icon: <MdCleanHands /> },
            { text: 'Laundry', icon: <MdOutlineLocalLaundryService /> },
            { text: 'Air Freshener', icon: <FaAirFreshener /> },
            { text: 'Water Filter', icon: <RiWaterFlashLine /> },
            { text: 'Cleaning Tools', icon: <GiVacuumCleaner /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/babycare.webp" alt="food" height={20} width={20} />,
        primaryText: 'Baby Care',
        collapses: [
            { text: 'baby Food', icon: <GiBabyBottle /> },
            { text: 'Baby Accessories', icon: <FaBabyCarriage /> },
        ],
    },
    {
        primaryIcon: <Image src="/images/drawer/beauty.webp" alt="food" height={20} width={20} />,
        primaryText: 'Beauty & Health',
        collapses: [
            { text: 'Shampoo', icon: <FaShower /> },
            { text: 'Makeup', icon: <GiLipstick /> },
        ],
    },
];
