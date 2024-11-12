package com.example.liquidsa.controllers;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.liquidsa.dtos.req.CreateUsuarioDTO;
import com.example.liquidsa.dtos.res.ShowUsuarioDTO;
import com.example.liquidsa.services.UsuarioService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<ShowUsuarioDTO> criarUsuario(@RequestBody CreateUsuarioDTO CreateUsuarioDTO) {
        ShowUsuarioDTO usuario = usuarioService.criarUsuario(CreateUsuarioDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuario);
    }

    @GetMapping
    public ResponseEntity<List<ShowUsuarioDTO>> listarUsuarios() {
        List<ShowUsuarioDTO> usuarios = usuarioService.listarUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShowUsuarioDTO> buscarUsuarioPorId(@PathVariable Long id) {
        ShowUsuarioDTO usuario = usuarioService.buscarUsuarioPorId(id);
        return ResponseEntity.ok(usuario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuario(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ShowUsuarioDTO> atualizarUsuarioParcial(@PathVariable Long id,
            @RequestBody Map<String, Object> atualizacoes) {
        ShowUsuarioDTO usuarioAtualizado = usuarioService.atualizarParcial(id, atualizacoes);
        return ResponseEntity.ok(usuarioAtualizado);
    }

    

    @PutMapping("/{id}")
    public ResponseEntity<ShowUsuarioDTO> atualizarUsuarioCompleto(@PathVariable Long id,
            @RequestBody CreateUsuarioDTO createUsuarioDTO) {
        ShowUsuarioDTO usuarioAtualizado = usuarioService.atualizarCompleto(id, createUsuarioDTO);
        return ResponseEntity.ok(usuarioAtualizado);
    }

}