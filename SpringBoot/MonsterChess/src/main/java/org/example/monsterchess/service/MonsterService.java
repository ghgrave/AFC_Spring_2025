package org.example.monsterchess.service;

import org.example.monsterchess.entity.Monster;
import org.example.monsterchess.repository.MonsterRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class MonsterService {

    private final MonsterRepository monsterRepository;

    public List<Monster> getAllMonsters() {
        return monsterRepository.findAll();
    }
}
