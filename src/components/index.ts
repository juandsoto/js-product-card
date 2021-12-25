import { ProductCardHocProps } from '../interfaces/interfaces';

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export type { Props as ProductCardProps } from './ProductCard';
export type { Props as ProductTitleProps } from './ProductTitle';
export type { Props as ProductImageProps } from './ProductImage';
export type { Props as ProductButtonsProps } from './ProductButtons';

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons
});

export default ProductCard;
