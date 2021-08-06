import React, { useState } from 'react';


export const ProductContext = React.createContext({
    products: [],
    toogleFav: (id) => { }
});

const ProductProvider = props => {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavorite = productId => {
        console.log(productId);
        console.log('teste');
        setProductsList(currentProdList => {
            const prodIndex = currentProdList.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !currentProdList[prodIndex].isFavorite;
            const updatedProducts = [...currentProdList];
            updatedProducts[prodIndex] = {
                ...currentProdList[prodIndex],
                isFavorite: newFavStatus
            };
            console.log(updatedProducts)
            return updatedProducts;
        })
    }
    return (
        <ProductContext.Provider value={{ products: productsList, toogleFav: toggleFavorite }}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;