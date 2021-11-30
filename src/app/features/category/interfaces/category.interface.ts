export interface ICategory {
    categoryId?: string | any;
    categoryName: string;
    categoryDescription: string;
    parentCategory?: string;
}

export interface ICategoryUI {
    categoryName: string;
    categoryDescription: string;
    childCategories: Array<ICategoryUI>;
}