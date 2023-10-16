//package com.nandha.meow.Controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.nandha.meow.Entity.ProductEntity;
//import com.nandha.meow.Service.ProductService;
//
//@RestController
//
//@RequestMapping("/products")
//public class ProductController {
//
//    @Autowired
//    private ProductService productService;
//
//    @PostMapping("/post")
//    public String PostProduct(@RequestBody ProductEntity product) {
//        productService.createProduct(product);
//        return "saved";
//    }
//
//    @GetMapping(value = "/get")
//    public Iterable<ProductEntity> getAllProducts() {
//        return productService.getAllProducts();
//    }
//
//    @GetMapping(value = "/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
//    public Page<ProductEntity> getData(@PathVariable(value = "currentPage") int page,
//                                       @PathVariable(value = "itemsPerPage") int size,
//                                       @PathVariable(value = "sortBy") String field,
//                                       @PathVariable(value = "sortOrder") String direction) {
//        return productService.getData(page, size, field, direction);
//    }
//
//    @GetMapping("{id}")
//    public ResponseEntity<ProductEntity> getProductById(@PathVariable int id) {
//        ProductEntity product = productService.getProductById(id);
//        if (product != null) {
//            return ResponseEntity.ok(product);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PutMapping("{id}")
//    public ProductEntity updateProductDetails(@RequestBody ProductEntity product) {
//        System.out.println("Changes Made Have Been Successfully Updated");
//        return productService.updateProduct(product);
//    }
//
//    @DeleteMapping("{id}")
//    public String deleteProduct(@PathVariable int id) {
//        productService.deleteProduct(id);
//        return "Id : " + id + " is deleted";
//    }
//
//    @DeleteMapping
//    public String deleteAllProducts() {
//        productService.deleteAllProducts();
//        return "All products deleted";
//    }
//}