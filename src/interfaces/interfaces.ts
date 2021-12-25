import { ProductCardProps, ProductTitleProps, ProductImageProps, ProductButtonsProps } from '../components';

export interface Product {
	id: string;
	img?: string;
	title: string;
}

export interface ProductContextProps {
	className?: string;
	counter: number;
	increaseBy: (number: number) => void;
	maxCount?: number;
	product: Product;
}

export interface ProductCardHocProps {
	({ children, product, className }: ProductCardProps): JSX.Element;
	Buttons: (props: ProductButtonsProps) => JSX.Element;
	Image: (props: ProductImageProps) => JSX.Element;
	Title: (props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
	count: number;
	product: Product;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}
