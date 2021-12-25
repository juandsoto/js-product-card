import { useEffect, useState, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);
		if (initialValues?.maxCount && initialValues.maxCount < newValue) return;
		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	return {
		counter,
		increaseBy,
		reset,
		isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount
	};
};
