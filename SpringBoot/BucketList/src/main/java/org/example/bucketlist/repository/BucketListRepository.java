package org.example.bucketlist.repository;
import org.example.bucketlist.entity.BucketListItem;
import org.springframework.data.jpa.repository.JpaRepository;

// what is this doing????
public interface BucketListRepository extends JpaRepository<BucketListItem, Long> {
//     giving us access to builtin fuctionality

}