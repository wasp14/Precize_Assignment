package com.sat_results.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sat_results.Dao.resultsRepo;
import com.sat_results.Models.satResults;

@Service
public class serviceImp implements satResultsService {
	@Autowired
	private resultsRepo repo;
	
	
	@Override
	public satResults saveScore(satResults score) {
		satResults result = null;
		satResults tosave = new satResults();
		tosave = score;
		if(tosave!=null)
		{
			
			
			if(tosave.getSat_score()>30)
			{
				tosave.setResult("Pass");
			}
			else
				tosave.setResult("Fail");
			
			
     		tosave.setName(score.getName());
//			
//			
//			tosave.setAddress(score.getAddress());
//			tosave.setCity(score.getCity());
//			tosave.setCountry(score.getCountry());
//			tosave.setPincode(score.getPincode());
//			tosave.setSat_score(marks);
//			tosave.setResult(score.getResult());
//			
			
			result  = repo.save(tosave);
		
		}
		return result;
	}

	@Override
	public Integer getRank(String name) {
		Integer rank = null;

		List<satResults> list = repo.findAllByOrderBySatscoreDesc();
		if(list.size()!=0) {
		Iterator<satResults> it = list.iterator();
		while(it.hasNext())
		{
			satResults score = it.next();
			if(score.getName().equals(name))
			{
				rank = (Integer)(list.indexOf(score)+1);
			}
		}
		
		}
		return rank;
	}

	@Override
	public List<satResults> getAll() {
	
		List<satResults> list = new ArrayList<satResults>();
		list = repo.findAll();
		return list;
	}

	@Override
	public satResults updateScore(String name, int score) {
		satResults result = null;
		if(name.length()!=0)
		{
			result = repo.getReferenceById(name);
			result.setSat_score(score);
			if(score>30)
			{
				result.setResult("Pass");
			}
			else
				result.setResult("Fail");
			result = repo.save(result);
		}
		return result;
	}

	@Override
	public void deleteScore(String name) {
	
		repo.deleteById(name);
		
	}

}
