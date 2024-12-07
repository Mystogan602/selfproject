import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class ProductDTO {
    @MinLength(10, {message: 'Title must be at least 10 characters long'})
    title: string;

    @IsNotEmpty({message: 'Description is required'})
    description: string;

    @IsNumber({},{message: 'Price must be a number'})
    @IsNotEmpty({message: 'Price is required'})
    price: number;

    @IsNumber({},{message: 'Discount percentage must be a number'})
    discountPercentage?: number;

    @IsNumber({},{message: 'Rating must be a number'})
    @IsNotEmpty({message: 'Rating is required'})
    rating: number;

    @IsNotEmpty({message: 'Brand is required'})
    brand: string;

    // @IsNumber({},{message: 'Category id must be a number'})
    // @IsNotEmpty({message: 'Category is required'})
    @IsNumber()
    categoryId: number;

    thumbnail?: string;
    images?: string[];
}