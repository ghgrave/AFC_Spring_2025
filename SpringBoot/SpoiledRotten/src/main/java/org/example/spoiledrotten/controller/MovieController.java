package org.example.spoiledrotten.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Value("${tmdb.api.key}")
    private String tmdbApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/search")
    public ResponseEntity<?> searchTMDb(@RequestParam String query) {
        String url = "https://api.themoviedb.org/3/search/movie?api_key=" + tmdbApiKey + "&query=" + query;
        Object result = restTemplate.getForObject(url, Object.class);
        return ResponseEntity.ok(result);
    }
}
