package com.example.liquidsa.controllers;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.liquidsa.dtos.req.CreateComentarioDTO;
import com.example.liquidsa.dtos.res.ShowComentarioDTO;
import com.example.liquidsa.services.ComentarioService;


import java.util.List;


@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    @Autowired
    private ComentarioService comentarioService;

    @PostMapping
    public ResponseEntity<ShowComentarioDTO> criarComentario(@RequestBody CreateComentarioDTO CreateComentarioDTO) {
        ShowComentarioDTO comentario = comentarioService.criarComentario(CreateComentarioDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(comentario);
    }

    @GetMapping
    public ResponseEntity<List<ShowComentarioDTO>> listarComentarios() {
        List<ShowComentarioDTO> comentarios = comentarioService.listarComentarios();
        return ResponseEntity.ok(comentarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShowComentarioDTO> buscarComentarioPorId(@PathVariable Long id) {
        ShowComentarioDTO comentario = comentarioService.buscarComentarioPorId(id);
        return ResponseEntity.ok(comentario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarComentario(@PathVariable Long id) {
        comentarioService.deletarComentario(id);
        return ResponseEntity.noContent().build();
    }
}
