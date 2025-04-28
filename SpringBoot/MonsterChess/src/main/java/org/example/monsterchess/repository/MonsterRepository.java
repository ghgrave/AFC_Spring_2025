package org.example.monsterchess.repository;

import org.example.monsterchess.entity.Monster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonsterRepository extends JpaRepository<Monster, Long> {

    // // Optional: Custom query examples
    // List<Monster> findByPlayerOwner(int playerOwner);
    //
    // List<Monster> findByIsCapturedFalse();
    //
    // List<Monster> findByMonsterType_Name(String name); // e.g., find all "goblin" monsters
}
