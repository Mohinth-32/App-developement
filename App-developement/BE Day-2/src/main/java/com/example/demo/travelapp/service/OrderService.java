package com.example.demo.travelapp.service;

import com.iamneo.ecom.dto.request.OrderRequest;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

}
