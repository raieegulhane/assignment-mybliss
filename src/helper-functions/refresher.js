import cloneDeep from "lodash.clonedeep";
import { productListSorterFunction } from "."

const shufflerFunction = (array) => {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * (array.length - 1));
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

export const refresherFunction = (productList) => {
    const { sortedByColor, sortedByInStock } = productListSorterFunction(productList);

    for (let i = 0; i < sortedByColor.length; i++) {
        console.log(sortedByColor[i]);
        shufflerFunction(sortedByColor[i])
    }

    shufflerFunction(sortedByColor);

    const newProductList = [...cloneDeep(sortedByColor).flat(), ...cloneDeep(sortedByInStock)];

    return(newProductList);
}