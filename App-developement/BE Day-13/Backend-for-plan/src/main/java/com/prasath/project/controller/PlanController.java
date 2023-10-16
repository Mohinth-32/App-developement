package com.prasath.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.prasath.project.entity.PlanEntity;
import com.prasath.project.service.PlanService;



@RestController

@RequestMapping("/Plans")
public class PlanController {

    @Autowired
    private PlanService PlanService;

    @PostMapping("/post")
    public String PostPlan(@RequestBody PlanEntity Plan) {
        PlanService.createPlan(Plan);
        return "saved";
    }

    @GetMapping(value = "/get")
    public Iterable<PlanEntity> getAllPlans() {
        return PlanService.getAllPlans();
    }

    @GetMapping(value = "/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
    public Page<PlanEntity> getData(@PathVariable(value = "currentPage") int page,
                                       @PathVariable(value = "itemsPerPage") int size,
                                       @PathVariable(value = "sortBy") String field,
                                       @PathVariable(value = "sortOrder") String direction) {
        return PlanService.getData(page, size, field, direction);
    }

    @GetMapping("{id}")
    public ResponseEntity<PlanEntity> getPlanById(@PathVariable int id) {
        PlanEntity Plan = PlanService.getPlanById(id);
        if (Plan != null) {
            return ResponseEntity.ok(Plan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("{id}")
    public PlanEntity updatePlanDetails(@RequestBody PlanEntity Plan) {
        System.out.println("Changes Made Have Been Successfully Updated");
        return PlanService.updatePlan(Plan);
    }

    @DeleteMapping("{id}")
    public String deletePlan(@PathVariable int id) {
        PlanService.deletePlan(id);
        return "Id : " + id + " is deleted";
    }

    @DeleteMapping
    public String deleteAllPlans() {
        PlanService.deleteAllPlans();
        return "All Plans deleted";
    }
}