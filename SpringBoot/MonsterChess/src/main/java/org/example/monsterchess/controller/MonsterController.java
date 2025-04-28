package org.example.monsterchess.controller;

import org.example.monsterchess.entity.Monster;
import org.example.monsterchess.service.MonsterService;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/monsters")

public class MonsterController {

    private final MonsterService monsterService;

    @GetMapping
    public List<Monster> getAllMonsters() {
        return monsterService.getAllMonsters();
    }
}
