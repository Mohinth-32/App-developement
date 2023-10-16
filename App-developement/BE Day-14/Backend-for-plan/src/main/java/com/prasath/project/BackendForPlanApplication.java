package com.prasath.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BackendForPlanApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendForPlanApplication.class, args);
	}
	

}
