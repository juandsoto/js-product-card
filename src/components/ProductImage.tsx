import React, { useContext, CSSProperties } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imageToUse: string = '';
  if (img) {
    imageToUse = img;
  } else if (product.img) {
    imageToUse = product.img;
  } else {
    imageToUse = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imageToUse}
      alt="Coffe Mug"
    />
  );
};
