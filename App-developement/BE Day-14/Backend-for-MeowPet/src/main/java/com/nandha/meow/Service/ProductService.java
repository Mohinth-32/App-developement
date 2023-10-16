//package com.nandha.meow.Service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.stereotype.Service;
//
//import com.nandha.meow.Entity.ProductEntity;
//import com.nandha.meow.Repository.ProductRepository;
//
//@Service
//public class ProductService {
//
//    @Autowired
//    private ProductRepository repo;
//
//    public ProductEntity createProduct(ProductEntity product) {
//        return repo.save(product);
//    }
//
//    public Page<ProductEntity> getData(int page, int size, String field, String direction) {
//        Pageable paging;
//        if (direction.equals("asc")) {
//            paging = PageRequest.of(page - 1, size).withSort(Sort.by(field));
//        } else {
//            paging = PageRequest.of(page - 1, size).withSort(Sort.by(field).descending());
//        }
//        return repo.findAll(paging);
//    }
//
//    public ProductEntity updateProduct(ProductEntity product) {
//        return repo.save(product);
//    }
//
//    public void deleteProduct(int id) {
//        repo.deleteById(id);
//    }
//
//    public void deleteAllProducts() {
//        repo.deleteAll();
//    }
//
//    public Iterable<ProductEntity> getAllProducts() {
//        return repo.findAll();
//    }
//
//    public ProductEntity getProductById(int id) {
//        return repo.findById(id).orElse(null);
//    }
//}