package com.nandha.meow.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nandha.meow.Entity.ProductEntity;




public interface ProductRepository extends JpaRepository<ProductEntity,Integer>{

}
