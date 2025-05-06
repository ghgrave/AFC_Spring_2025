package org.example.spoiledrotten.repository;

import org.example.spoiledrotten.entity.Spoiler;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpoilerRepository extends JpaRepository<Spoiler, Long> {
    List<Spoiler> findByMovie_TmdbId(Integer tmdbId); // 🔍 looks for getTmdbId()

}
