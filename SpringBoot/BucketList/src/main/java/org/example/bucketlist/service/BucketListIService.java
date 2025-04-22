package org.example.bucketlist.service;

// importing the blueprint
import org.example.bucketlist.entity.BucketListItem;
// giving access to all the cool functionality of JPA and allows us customizing
import org.example.bucketlist.repository.BucketListRepository;
// lombok
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

// this
import java.util.List;

@AllArgsConstructor
@Service

public class BucketListIService {

    private final BucketListRepository  bucketListRepository;

    //  return ALL items in the bucketlistitems table
    public List<BucketListItem> getAllItems() {
        // findAll() built into JPA
        return bucketListRepository.findAll();
    }

    public BucketListItem createItem(BucketListItem item) {
        return bucketListRepository.save(item);
    }
}
