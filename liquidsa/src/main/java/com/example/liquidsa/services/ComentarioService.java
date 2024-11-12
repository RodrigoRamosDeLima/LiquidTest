package com.example.liquidsa.services;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.liquidsa.dtos.req.CreateComentarioDTO;
import com.example.liquidsa.dtos.res.ShowComentarioDTO;
import com.example.liquidsa.entities.ComentarioEntity;
import com.example.liquidsa.repositories.ComentarioRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ComentarioService {

    @Autowired
    private ComentarioRepository comentarioRepository;

    public ShowComentarioDTO criarComentario(CreateComentarioDTO CreateComentarioDTO) {
        ComentarioEntity comentario = new ComentarioEntity();
        comentario.setConteudo(CreateComentarioDTO.getConteudo());
        comentario = comentarioRepository.save(comentario);

        ShowComentarioDTO response = new ShowComentarioDTO();
        response.setId(comentario.getId());
        response.setConteudo(comentario.getConteudo());
        response.setDataCriacao(comentario.getDataCriacao());

        return response;
    }

    public List<ShowComentarioDTO> listarComentarios() {
        List<ComentarioEntity> comentarios = comentarioRepository.findAll();
        return comentarios.stream().map(comentario -> {
            ShowComentarioDTO response = new ShowComentarioDTO();
            response.setId(comentario.getId());
            response.setConteudo(comentario.getConteudo());
            response.setDataCriacao(comentario.getDataCriacao());
            return response;
        }).collect(Collectors.toList());
    }

    public ShowComentarioDTO buscarComentarioPorId(Long id) {
        ComentarioEntity comentario = comentarioRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Comentário não encontrado"));

            ShowComentarioDTO response = new ShowComentarioDTO();
        response.setId(comentario.getId());
        response.setConteudo(comentario.getConteudo());
        response.setDataCriacao(comentario.getDataCriacao());

        return response;
    }

    public void deletarComentario(Long id) {
        comentarioRepository.deleteById(id);
    }
}
