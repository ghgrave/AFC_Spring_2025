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

    // Join to movie using movie_id FK
    @ManyToOne
    @JoinColumn(name = "tmdb_id", nullable = false)
    private Movie movie;

    @Column(name = "spoiler_text", columnDefinition = "TEXT")
    private String spoilerText;

    @Column(name = "spoiler_type")
    private String spoilerType; // e.g., "👀 Surprise cameo!"

    @Column(name = "is_verified")
    private Boolean isVerified = false;

    @Column(name = "submitted_by")
    private String submittedBy;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "is_deleted")
    private Boolean isDeleted = false;
}
