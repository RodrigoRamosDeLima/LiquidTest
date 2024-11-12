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

import com.example.liquidsa.dtos.req.CreatePostagemDTO;
import com.example.liquidsa.dtos.res.ShowPostagemDTO;
import com.example.liquidsa.services.PostagemService;

import java.util.List;



@RestController
@RequestMapping("/postagens")
public class PostagemController {

    @Autowired
    private PostagemService postagemService;

    @PostMapping
    public ResponseEntity<ShowPostagemDTO> criarPostagem(@RequestBody CreatePostagemDTO CreatePostagemDTO) {
        ShowPostagemDTO postagem = postagemService.criarPostagem(CreatePostagemDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(postagem);
    }

    @GetMapping
    public ResponseEntity<List<ShowPostagemDTO>> listarPostagens() {
        List<ShowPostagemDTO> postagens = postagemService.listarPostagens();
        return ResponseEntity.ok(postagens);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShowPostagemDTO> buscarPostagemPorId(@PathVariable Long id) {
        ShowPostagemDTO postagem = postagemService.buscarPostagemPorId(id);
        return ResponseEntity.ok(postagem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPostagem(@PathVariable Long id) {
        postagemService.deletarPostagem(id);
        return ResponseEntity.noContent().build();
    }
}
