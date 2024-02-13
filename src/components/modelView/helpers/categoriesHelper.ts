export interface Category {
    _id:string;
    parent_id:any;
    name: string;
}

export const deepCloneData=(data: Array<Category>) => JSON.parse(JSON.stringify(data))

export const toUpperCaseData=(element: Array<Category>, key: string) => element.map((item: Category) => { 
        item[key as keyof Category] = item[key as keyof Category].toUpperCase()
        return item
    })

export const getMainCategories = (categories: Array<Category>) =>
                categories.filter((elem: Category) => elem.parent_id === 0)

// export const getChildCategoriesByParentId = (categories: Array<Category>, id:string) => 
// categories.filter(element => element.parent_id === id)

export const divideArrayToColumn = (elements: Array<Category>, amountElements:number) => {
        if (elements) {
            let newElements: Array<any> = []
            let slicedArray
            let column = Math.ceil(elements.length/amountElements)
            let from = 0, before = amountElements

                for (let index = 0; index < column; index++) {
                    slicedArray = elements.slice(from, before)
                    from += amountElements
                    before += amountElements

                    newElements = [...newElements, slicedArray]
                }
                
        return newElements
        }
            
    
    }
