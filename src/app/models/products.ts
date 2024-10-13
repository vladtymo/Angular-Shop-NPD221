export interface ProductModel {
    id: number;
    name: string;
    imageUrl?: string;
    description?: string;
    price: number;
    discount: number;
    quantity: number;
    categoryId: number;
    categoryName?: string;
}