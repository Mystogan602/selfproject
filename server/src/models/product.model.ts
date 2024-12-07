export class ProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating: number;
    brand: string;
    categoryId: number;
    thumbnail?: string;
    images?: string[];

    constructor({id, title, description, price, discountPercentage, rating, brand, categoryId, thumbnail, images}) {
        if (id || title || description || price || rating || brand || categoryId) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.price = price; 
            this.discountPercentage = discountPercentage;
            this.rating = rating;
            this.brand = brand;
            this.categoryId = categoryId;
            this.thumbnail = thumbnail;
            this.images = images;
        }
    }
}