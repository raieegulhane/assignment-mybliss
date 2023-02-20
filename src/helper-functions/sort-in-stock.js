import cloneDeep from "lodash.clonedeep"

export const sortByInStockFunction = ({ inStock }, products) => {
    const clonedProductList = cloneDeep(products);

    if (inStock) {
        return clonedProductList.filter((item) => item.variants[0].inventory_quantity !== 0);    
    }

    return clonedProductList;
}