import cloneDeep from "lodash.clonedeep";

export const sortByColorFunction = (color, products) => {
    const clonedProductList = cloneDeep(products);
    const sortedProducts = (colorName) => cloneDeep(clonedProductList.filter(({ title }) => title.toUpperCase().includes(colorName)));

    if (color !== "ALL") {
        if (color === "BLUE") {
            return [
                ...sortedProducts(color), 
                ...sortedProducts("TURQUOISE")
            ];
        }

        if (color === "PURPLE") {
            return [
                ...sortedProducts(color), 
                ...sortedProducts("LAVENDER"), 
                ...sortedProducts("LILAC"), 
                ...sortedProducts("VIOLET")
            ];
        }

        if (color === "OTHER") {
            return [
                ...sortedProducts(color), 
                ...sortedProducts("BLACK"), 
                ...sortedProducts("GREY"), 
                ...sortedProducts("MAROON"), 
                ...sortedProducts("MULTICOLOUR")
            ];
        }
        
        return sortedProducts(color);
    }

    return clonedProductList;
}