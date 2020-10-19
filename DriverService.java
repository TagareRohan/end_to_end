package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Driver;
import com.example.demo.repos.DriverRepository;

@Service
public class DriverService {

	@Autowired
	private DriverRepository repo;
	
	
	public Driver add(Driver entity)
	{
		return repo.save(entity);
	}
	
	public List<Driver> findAll()
	{
		return repo.findAll();
	}
	
	public Driver findById(int key)
	{
		Optional<Driver> resp= repo.findById(key);
		
		Driver obj=null;
		
		if(resp.isPresent())
		{
			obj=resp.get();
		}
		else
		{
			throw new RuntimeException("element not found");
		}
		
		return obj;
	}
	
	public Driver update(Driver entity)
	{
		return repo.save(entity);
	}
	
	public void remove(int key)
	{
		repo.deleteById(key);
	}
	
	
}
