import cloneDeep from "lodash.clonedeep";
import { sortByColorFunction, sortByInStockFunction } from ".";

const colorList = ["BLUE", "PINK", "PURPLE", "ORANGE", "GREEN", "YELLOW", "WHITE", "OTHER"];

export const productListSorterFunction = (productList) => {
    let sortedByColor = [] 
    const sortedByInStock = [];

    for (let i = 0; i < colorList.length; i++) {
        sortedByColor.push(sortByInStockFunction(true, sortByColorFunction(colorList[i], productList)));
    }

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].variants[0].inventory_quantity === 0) {
            sortedByInStock.push(cloneDeep(productList[i]));
        }
    }

    return {sortedByColor, sortedByInStock};
}