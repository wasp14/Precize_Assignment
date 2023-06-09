package com.sat_results.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sat_results.Dao.resultsRepo;
import com.sat_results.Models.satResults;


public interface satResultsService {
	

	public satResults saveScore(satResults score);
	
	public Integer getRank(String name);
	
	public List<satResults> getAll();
	
	public satResults updateScore(String name, int score);
	
	public void deleteScore(String name);
	
	
}
