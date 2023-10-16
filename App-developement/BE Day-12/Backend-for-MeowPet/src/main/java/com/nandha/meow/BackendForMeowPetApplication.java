package com.nandha.meow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BackendForMeowPetApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendForMeowPetApplication.class, args);
	}

}
