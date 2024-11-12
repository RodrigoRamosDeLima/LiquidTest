package com.example.liquidsa.entities;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "conexao")


public class ConexaoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "seguidor_id", nullable = false)
    private UsuarioEntity seguidor;

    @ManyToOne
    @JoinColumn(name = "seguido_id", nullable = false)
    private UsuarioEntity seguido;

    @Column(name = "data_criacao")
    private LocalDateTime dataCriacao = LocalDateTime.now();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UsuarioEntity getSeguidor() {
        return seguidor;
    }

    public void setSeguidor(UsuarioEntity seguidor) {
        this.seguidor = seguidor;
    }

    public UsuarioEntity getSeguido() {
        return seguido;
    }

    public void setSeguido(UsuarioEntity seguido) {
        this.seguido = seguido;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    // Getters e Setters
    // ...
}
