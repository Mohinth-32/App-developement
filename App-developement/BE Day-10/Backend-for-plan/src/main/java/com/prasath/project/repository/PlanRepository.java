//package com.nandha.meow.Repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.nandha.meow.Entity.PlanEntity;
//
//
//
//
//public interface PlanRepository extends JpaRepository<PlanEntity,Integer>{
//
//}


package com.prasath.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;



import org.springframework.data.repository.PagingAndSortingRepository;

import com.prasath.project.entity.PlanEntity;

public interface PlanRepository extends
JpaRepository<PlanEntity,Integer>,
PagingAndSortingRepository<PlanEntity, Integer>{
	
}