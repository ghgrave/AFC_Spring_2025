package org.example.monsterchess.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "monsters")
public class Monster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "is_king")
    private boolean isKing = false;

    @Column(name = "player_owner", nullable = false)
    private int playerOwner;

    @Column(name = "position_row")
    private Integer positionRow;

    @Column(name = "position_col")
    private Integer positionCol;

    @Column(name = "is_captured")
    private boolean isCaptured = false;

    @ManyToOne
    @JoinColumn(name = "monster_type_id")
    private MonsterType monsterType;
}
