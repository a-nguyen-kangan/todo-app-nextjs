import { getProducts } from '@/lib/fetch'
import { get } from 'http'
import { ProductLine } from './ProductLine';

export default async function ViewProducts() {
    let data = await getProducts();
    console.log(data);
    return (
        <div>
            { data.map((product: any) => {
                return (
                <ProductLine key={product.id} id={product.id} name={product.name} description={product.description} />
                );
            }
            )}
        </div>
    )

}