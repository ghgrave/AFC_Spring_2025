package org.example.bucketlist.controller;

import org.example.bucketlist.entity.BucketListItem;
import lombok.AllArgsConstructor;
import org.example.bucketlist.service.BucketListIService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// cors issue resolved
@CrossOrigin("*")
@AllArgsConstructor
// this file is going to act as route handlers
@RestController

// think of this as baseUrl?
@RequestMapping("/api/bucket")

public class BucketListController {
    private final BucketListIService bucketListService;

    // express
    // app.get("route", (req, res)=>{})

    // verb = GET
    // route = "/api/bucket"
    // endpoint = "localhost:8080/api/bucket"
    // if the user goes to localhost:8080/api/bucket
    // connect to database
    // return ALL rows from that entity's table!!
    // Same as => select * from bucketlistitems;
    @GetMapping
    public ResponseEntity<List<BucketListItem>> getAllItems() {
        List<BucketListItem> items = bucketListService.getAllItems();
        return ResponseEntity.ok(items);
    }

//     verb = POST
//     route = "/api/bucket"
    @PostMapping
    // this is how the receipt is asked for
    // INSERT INTO bucketListItems(description) Values("Go to Mexico City")
    // RETURNING *
    public ResponseEntity<BucketListItem> createTask(@RequestBody BucketListItem item) {
        BucketListItem newItem = bucketListService.createItem(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }
}
