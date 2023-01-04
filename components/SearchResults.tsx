import { ProductItem } from "./ProductsItem";

interface SearchResultsProps {
    results: Array<{
        id: number,
        price: number,
        title: string
    }>
}

export function SearchResults({ results }: SearchResultsProps) {
    return (
        <div>
            {results.map(products => {
                return (
                    <ProductItem product={products} />
                );
            })}
        </div>
    )
}