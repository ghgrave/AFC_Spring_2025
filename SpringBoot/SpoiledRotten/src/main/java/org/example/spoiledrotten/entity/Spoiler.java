package org.example.spoiledrotten.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "spoilers")
public class Spoiler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many spoilers can belong to one movie
    @ManyToOne
    @JoinColumn(name = "tmdb_id", nullable = false)
    private Movie movie;

    @Column(columnDefinition = "TEXT")
    private String spoiler_text;

    private String spoiler_type; // stores values like "👀 Surprise cameo!"

    private Boolean is_verified = false;

    private String submitted_by; // username or null

    private LocalDateTime created_at = LocalDateTime.now();

    private Boolean is_deleted = false;
}
