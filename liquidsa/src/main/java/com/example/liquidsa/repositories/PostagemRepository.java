package com.example.liquidsa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.liquidsa.entities.PostagemEntity;

@Repository
public interface PostagemRepository  extends JpaRepository<PostagemEntity, Long>{
    
}
