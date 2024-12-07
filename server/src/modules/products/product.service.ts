import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
import { ProductModel } from "src/models/product.model";

@Injectable()

export class ProductService {
    private products: ProductModel[] = [
        {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) and medium sized',
            price: 109.95,
            discountPercentage: 15,
            rating: 4.5,
            brand: 'Fjallraven',
            categoryId: 1,
            thumbnail: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            images: [
                'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            ]
        },
        {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            description: 'Slim-fitting style, contrast raglan long sleeve',
            price: 22.3,
            discountPercentage: 15,
            rating: 4.5,
            brand: 'Mens Casual',
            categoryId: 2,
            thumbnail: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            images: [
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
            ]}
    ];

    getProducts(): ProductModel[] {
        return this.products;
    }

    createProduct(productDTO: ProductDTO): ProductModel {
        const product: ProductModel = {
            id: this.products.length + 1,
            ...productDTO
        };
        this.products.push(product);
        return product;
    }

    getProduct(id: number): ProductModel | null {
        if (id === undefined || id === null) return null;
        return this.products.find(product => product.id === id) || null;
    }

    updateProduct(productDTO: ProductDTO, id: number): ProductModel {
        const index = this.products.findIndex(product => product.id === id);
        this.products[index] = {id, ...productDTO};
        return this.products[index];
    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return false;
        this.products.splice(index, 1);
        return true;
    }
}