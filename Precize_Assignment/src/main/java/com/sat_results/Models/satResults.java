package com.sat_results.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SAT_RESULTS")
public class satResults {
	@Column(name = "Name")
	@Id
	private String name;
	@Column(name = "Address")
	private String address;
	@Column(name = "City")
	private String city;
	@Column(name = "Country")
	private String country;
	@Column(name = "Pincode")
	private int pincode;
	@Column(name = "Score")
	private int sat_score;
	@Column(name = "Result")
	private String result;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public int getSat_score() {
		return sat_score;
	}
	public void setSat_score(int sat_score) {
		this.sat_score = sat_score;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	
	
	public satResults() {
		
	}
	public satResults(String name, String address, String city, String country, int pincode, int sat_score) {
		super();
		this.name = name;
		this.address = address;
		this.city = city;
		this.country = country;
		this.pincode = pincode;
		this.sat_score = sat_score;
	}
	
	
	@Override
	public String toString() {
		return "satResults [name=" + name + ", address=" + address + ", city=" + city + ", country=" + country
				+ ", pincode=" + pincode + ", sat_score=" + sat_score + ", result=" + result + "]";
	}
	
	
	
	
	

	
	
	
	
}
