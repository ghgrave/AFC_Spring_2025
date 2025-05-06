package org.example.spoiledrotten.controller;

import lombok.RequiredArgsConstructor;
import org.example.spoiledrotten.entity.Spoiler;
import org.example.spoiledrotten.repository.SpoilerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/spoilers")
@RequiredArgsConstructor
public class SpoilerController {

    private final SpoilerRepository spoilerRepository;

    @GetMapping("/tmdb/{tmdbId}")
    public ResponseEntity<List<Spoiler>> getSpoilersByTmdbId(@PathVariable Integer tmdbId) {
        List<Spoiler> spoilers = spoilerRepository.findByMovie_TmdbId(tmdbId);
        System.out.println("Found " + spoilers.size() + " spoilers for TMDb ID: " + tmdbId);
        return ResponseEntity.ok(spoilers);
    }
}
