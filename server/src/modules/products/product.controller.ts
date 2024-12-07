import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpStatusCodeEnum, HttpMessageEnum } from "src/global/globalEnum";
import { ProductModel } from "src/models/product.model";
import { ProductDTO } from "src/dto/product.dto";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts(): ResponseData<ProductModel[]> {
        try {
            return new ResponseData<ProductModel[]>(this.productService.getProducts(), HttpStatusCodeEnum.OK, HttpMessageEnum.OK);
        } catch (error) {
            return new ResponseData<ProductModel[]>(null, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, HttpMessageEnum.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    createProduct(@Body() ProductDTO: ProductDTO): ResponseData<ProductModel> {
        try {
            return new ResponseData<ProductModel>(this.productService.createProduct(ProductDTO), HttpStatusCodeEnum.OK, HttpMessageEnum.OK);
        } catch (error) {
            return new ResponseData<ProductModel>(null, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, HttpMessageEnum.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/:id')
    getProduct(@Param('id') id: number): ResponseData<ProductModel> {
        try {
            return new ResponseData<ProductModel>(this.productService.getProduct(Number(id)), HttpStatusCodeEnum.OK, HttpMessageEnum.OK);
        } catch (error) {
            return new ResponseData<ProductModel>(null, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, HttpMessageEnum.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('/:id')
    updateProduct(@Body() productDTO: ProductDTO, @Param('id') id: number): ResponseData<ProductModel> {
        try {
            return new ResponseData<ProductModel>(this.productService.updateProduct(productDTO, Number(id)), HttpStatusCodeEnum.OK, HttpMessageEnum.OK);
        } catch (error) {
            return new ResponseData<ProductModel>(null, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, HttpMessageEnum.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: number): ResponseData<boolean> {
        try {
            return new ResponseData<boolean>(this.productService.deleteProduct(Number(id)), HttpStatusCodeEnum.OK, HttpMessageEnum.OK);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, HttpMessageEnum.INTERNAL_SERVER_ERROR);
        }
    }
}