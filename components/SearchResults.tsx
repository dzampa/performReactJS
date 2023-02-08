import { FC } from 'react';
import { List as _List, ListProps, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from "./ProductsItem";

const List = _List as unknown as FC<ListProps>;
interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number,
        price: number,
        priceFormatted: string,
        title: string
    }>;
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem
                    product={results[index]}
                    onAddToWishlist={onAddToWishlist}
                />
            </div>
        )
    }


    return (
        <div>
            <h2>{totalPrice}</h2>
            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
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