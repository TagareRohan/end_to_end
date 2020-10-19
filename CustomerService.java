package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.repos.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repo;
	
	
	public Customer add(Customer entity)
	{
		return repo.save(entity);
	}
	
	public List<Customer> findAll()
	{
		return repo.findAll();
	}
	
	public Customer findById(int key)
	{
		Optional<Customer> resp= repo.findById(key);
		
		Customer obj=null;
		
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
	
	public void remove(int key)
	{
		repo.deleteById(key);
	}
	
	public Customer update(Customer entity)
	{
		return repo.save(entity);
	}
	
	
}
