import { memo, useState } from "react"
import dynamic from "next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import("./AddProductToWishlist").then(mod => mod.AddProductToWishlist)
}, {
    loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
    product: {
        id: number,
        price: number,
        priceFormatted: string,
        title: string
    },
    onAddToWishlist: (id: number) => void;
}

function ProductItemCompontent({ product, onAddToWishlist }: ProductItemProps) {
    const [isAddingToWishList, setIsAddingToWishlist] = useState(false)
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

            {isAddingToWishList === true && (
                <AddProductToWishlist
                    onAddToWishList={() => onAddToWishlist(product.id)}
                    onRequestClose={() => setIsAddingToWishlist(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemCompontent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})