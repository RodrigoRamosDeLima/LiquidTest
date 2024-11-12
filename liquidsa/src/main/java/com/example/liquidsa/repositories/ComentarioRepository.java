package com.example.liquidsa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.liquidsa.entities.ComentarioEntity;

@Repository
public interface ComentarioRepository extends JpaRepository<ComentarioEntity, Long> {
    
}
