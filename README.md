# JS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'js-product-card
```

```
<ProductCard key={product.id} product={product} initialValues={{ count: 4, maxCount: 10 }}>
	{args => (
		<>
			<ProductImage />
			<ProductTitle />
			<ProductButtons />
		</>
	)}
</ProductCard>
```

### Juan David Soto Carmona
