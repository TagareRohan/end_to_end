package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Driver;
import com.example.demo.services.DriverService;

@RestController
@CrossOrigin(origins="*")
public class DriverController {
	
	@Autowired
	private DriverService service;
	
	@PostMapping(path="/api/v1/drivers")
	@ResponseStatus(code=HttpStatus.CREATED)
	public Driver addDriver(@RequestBody Driver entity)
	{
		return this.service.add(entity);
	}
	
	@GetMapping(path="/api/v1/drivers")
	public List<Driver> findAll()
	{
		return this.service.findAll();
	}
	
	@GetMapping(path="api/v1/drivers/{driverId}")
	public Driver findById(@PathVariable("driverId") int key)
	{
		return this.service.findById(key);
	}
	
	@PutMapping(path="api/v1/drivers")
	public Driver updateDriver(@RequestBody Driver entity)
	{
		return this.service.update(entity);
	}
	
	@DeleteMapping(path="api/v1/drivers/{driverId}")
	public void deleteDriver(@PathVariable("driverId") int key)
	{
		this.service.remove(key);
	}
	
	

}
