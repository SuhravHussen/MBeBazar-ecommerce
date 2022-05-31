import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiShoppingCart } from 'react-icons/fi';
import Banner from '../components/Common/Banner/Banner';
import Carousel from '../components/Common/Carousel';
import Footer from '../components/Common/Footer/Footer';
import MyModal from '../components/Common/MyModal';
import QuantityPicker from '../components/Common/QuantityPicker';
import SectionHeader from '../components/Common/SectionHeader';

export {
    Image,
    Link,
    useState,
    React,
    useEffect,
    Rating,
    QuantityPicker,
    FiShoppingCart,
    dynamic,
    Fade,
    MyModal,
    Carousel,
    Skeleton,
    SectionHeader,
    useRef,
    useCallback,
    useMemo,
    Banner,
    Footer,
};
