package com.example.liquidsa.services;

// import org.hibernate.mapping.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.liquidsa.dtos.req.CreatePostagemDTO;
import com.example.liquidsa.dtos.res.ShowPostagemDTO;
import com.example.liquidsa.entities.PostagemEntity;
import com.example.liquidsa.repositories.PostagemRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class PostagemService {

    @Autowired
    private PostagemRepository postagemRepository;

    public ShowPostagemDTO criarPostagem(CreatePostagemDTO CreatePostagemDTO) {
        PostagemEntity postagem = new PostagemEntity();
        postagem.setConteudo(CreatePostagemDTO.getConteudo());
        postagem = postagemRepository.save(postagem);

        ShowPostagemDTO response = new ShowPostagemDTO();
        response.setId(postagem.getId());
        response.setConteudo(postagem.getConteudo());
        response.setDataCriacao(postagem.getDataCriacao());

        return response;
    }

    public List<ShowPostagemDTO> listarPostagens() {
        List<PostagemEntity> postagens = postagemRepository.findAll();
        return postagens.stream().map(postagem -> {
            ShowPostagemDTO response = new ShowPostagemDTO();
            response.setId(postagem.getId());
            response.setConteudo(postagem.getConteudo());
            response.setDataCriacao(postagem.getDataCriacao());
            return response;
        }).collect(Collectors.toList());
    }

    public ShowPostagemDTO buscarPostagemPorId(Long id) {
        PostagemEntity postagem = postagemRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Postagem não encontrada"));
             ShowPostagemDTO response = new ShowPostagemDTO();
        response.setId(postagem.getId());
        response.setConteudo(postagem.getConteudo());
        response.setDataCriacao(postagem.getDataCriacao());

        return response;
    }

    public void deletarPostagem(Long id) {
        postagemRepository.deleteById(id);
    }
}
