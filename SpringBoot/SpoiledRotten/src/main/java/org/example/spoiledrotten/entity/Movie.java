package org.example.spoiledrotten.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tmdb_id")
    private Integer tmdbId;

    private String title;

    @Column(name = "release_year")
    private Integer releaseYear;

    @Column(name = "is_deleted")
    private Boolean isDeleted = false;

    @Column(name = "add_to_watchlist")
    private Boolean addToWatchlist = false;

    @Column(name = "is_ignored")
    private Boolean isIgnored = false;
}
