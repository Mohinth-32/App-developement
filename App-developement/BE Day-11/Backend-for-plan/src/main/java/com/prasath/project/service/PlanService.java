package com.prasath.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.prasath.project.entity.PlanEntity;
import com.prasath.project.repository.PlanRepository;



@Service
public class PlanService {

    @Autowired
    private PlanRepository repo;

    public PlanEntity createPlan(PlanEntity Plan) {
        return repo.save(Plan);
    }

    public Page<PlanEntity> getData(int page, int size, String field, String direction) {
        Pageable paging;
        if (direction.equals("asc")) {
            paging = PageRequest.of(page - 1, size).withSort(Sort.by(field));
        } else {
            paging = PageRequest.of(page - 1, size).withSort(Sort.by(field).descending());
        }
        return repo.findAll(paging);
    }

    public PlanEntity updatePlan(PlanEntity Plan) {
        return repo.save(Plan);
    }

    public void deletePlan(int id) {
        repo.deleteById(id);
    }

    public void deleteAllPlans() {
        repo.deleteAll();
    }

    public Iterable<PlanEntity> getAllPlans() {
        return repo.findAll();
    }

    public PlanEntity getPlanById(int id) {
        return repo.findById(id).orElse(null);
    }
}