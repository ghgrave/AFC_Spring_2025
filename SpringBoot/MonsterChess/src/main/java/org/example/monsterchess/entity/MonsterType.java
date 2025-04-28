package org.example.monsterchess.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "monster_type")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonsterType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    @Column(name = "special_ability")
    private String specialAbility;
}
