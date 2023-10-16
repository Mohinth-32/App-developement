//package com.nandha.meow.Entity;
//
//
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Table(name="plans")
//
//public class ProductEntity {
//			@Id
//			@GeneratedValue(strategy=GenerationType.AUTO)
//			private int id;
//			private String firstname;
//			private String lastname;
//			private String enddate;
//			public String getEnddate() {
//				return enddate;
//			}
//			public void setEnddate(String enddate) {
//				this.enddate = enddate;
//			}
//			public String getDestination() {
//				return destination;
//			}
//			public void setDestination(String destination) {
//				this.destination = destination;
//			}
//			public double getEstimatedexpenses() {
//				return estimatedexpenses;
//			}
//			public void setEstimatedexpenses(double estimatedexpenses) {
//				this.estimatedexpenses = estimatedexpenses;
//			}
//			public String getTraveldescription() {
//				return traveldescription;
//			}
//			public void setTraveldescription(String traveldescription) {
//				this.traveldescription = traveldescription;
//			}
//
//			private String destination;
//			private double estimatedexpenses;
//			private String traveldescription;
//			
//			public String getlastname() {
//				return lastname;
//			}
//			public void setlastname(String lastname) {
//				this.lastname = lastname;
//			}
//			public String getstartdate() {
//				return startdate;
//			}
//			public void setstartdate(String startdate) {
//				this.startdate = startdate;
//			}
//			
//			private String email;
//			public ProductEntity(int id, String firstname, String lastname, String email, String startdate, String enddate, String destination, double estimatedexpenses, String traveldescription) {
//				super();
//				this.id = id;
//				this.firstname = firstname;
//				this.lastname = lastname;
//				this.email = email;
//				this.startdate = startdate;
//				this.enddate = enddate;
//				this.destination = destination;
//				this.estimatedexpenses = estimatedexpenses;
//				this.traveldescription= traveldescription;
//				
//				
//				
//				
//			}
//			private String startdate;
//						
//			public int getId() {
//				return id;
//			}
//			public void setId(int id) {
//				this.id = id;
//			}
//			public String getfirstname() {
//				return firstname;
//			}
//			public void setfirstname(String firstname) {
//				this.firstname = firstname;
//			}
//			public String getemail() {
//				return email;
//			}
//			public void setemail(String email) {
//				this.email = email;
//			}
//			
//			public ProductEntity() {}
//		
//	}