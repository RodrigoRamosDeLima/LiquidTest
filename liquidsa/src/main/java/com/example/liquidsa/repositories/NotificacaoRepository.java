package com.example.liquidsa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.liquidsa.entities.NotificacaoEntity;

@Repository
public interface NotificacaoRepository extends JpaRepository<NotificacaoEntity, Long>{


    
}
