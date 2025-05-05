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

    private Integer tmdb_id;

    private String title;

    private Integer release_year;

    private Boolean is_deleted = false;

    private Boolean add_to_watchlist = false;

    private Boolean is_ignored = false;
}

