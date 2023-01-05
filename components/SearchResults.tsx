import { useMemo } from "react";
import { ProductItem } from "./ProductsItem";

interface SearchResultsProps {
    results: Array<{
        id: number,
        price: number,
        title: string
    }>
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                    />
                );
            })}
        </div>
    )
}

/** ao renderizar
 * 1. Criar uma nova versão do componente
 * 2. comparar com a versão anterior
 * 3. se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 * 
 * 1. Cálculos pesados
 * 2. igualdade referencial (quando se repassa uma informação a um componente filho)
 */