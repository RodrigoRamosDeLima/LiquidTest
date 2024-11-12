package com.example.liquidsa.entities;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name = "usuario")
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "senha")
    private String senha;
    
    @Column(name = "bio")
    private String bio;

    @Column(name = "data_criacao")
    private LocalDateTime dataCriacao = LocalDateTime.now();

    @Column(name = "ultimo_login")
    private LocalDateTime ultimoLogin;

    // Relacionamento com Postagem e outras entidades sem CascadeType.ALL
    @OneToMany(mappedBy = "usuario")
    private List<PostagemEntity> postagens;

    @OneToMany(mappedBy = "usuario")
    private List<ComentarioEntity> comentarios;

    @OneToMany(mappedBy = "seguidor")
    private List<ConexaoEntity> seguindo;

    @OneToMany(mappedBy = "seguido")
    private List<ConexaoEntity> seguidores;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public LocalDateTime getUltimoLogin() {
        return ultimoLogin;
    }

    public void setUltimoLogin(LocalDateTime ultimoLogin) {
        this.ultimoLogin = ultimoLogin;
    }

    public List<PostagemEntity> getPostagens() {
        return postagens;
    }

    public void setPostagens(List<PostagemEntity> postagens) {
        this.postagens = postagens;
    }

    public List<ComentarioEntity> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<ComentarioEntity> comentarios) {
        this.comentarios = comentarios;
    }

    public List<ConexaoEntity> getSeguindo() {
        return seguindo;
    }

    public void setSeguindo(List<ConexaoEntity> seguindo) {
        this.seguindo = seguindo;
    }

    public List<ConexaoEntity> getSeguidores() {
        return seguidores;
    }

    public void setSeguidores(List<ConexaoEntity> seguidores) {
        this.seguidores = seguidores;
    }

    // Getters e Setters
    // ...
}
