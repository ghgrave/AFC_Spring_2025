INSERT INTO movies (id, tmdb_id, title, release_year, is_deleted, add_to_watchlist, is_ignored)
VALUES
    (1, 5, 'Movie Title 1', 2008, FALSE, FALSE, TRUE),
    (2, 3, 'Movie Title 2', 2004, FALSE, TRUE, TRUE),
    (3, 3, 'Movie Title 3', 2017, FALSE, TRUE, FALSE),
    (4, 2, 'Movie Title 4', 2008, FALSE, FALSE, TRUE),
    (5, 4, 'Movie Title 5', 2022, FALSE, TRUE, FALSE);

INSERT INTO spoilers (id, tmdb_id, spoiler_text, spoiler_type, is_verified, submitted_by, created_at, is_deleted)
VALUES
    (1, 2, 'This is spoiler #1 - 🤬 Why did you tell me this?', '🤬 Why did you tell me this?', TRUE, 'user1@example.com', '2024-06-22 21:49:02', FALSE),
    (2, 4, 'This is spoiler #2 - 😱 Oh my god!', '😱 Oh my god!', TRUE, 'user2@example.com', '2025-01-14 21:49:02', FALSE),
    (3, 2, 'This is spoiler #3 - 🎞️ Saw it in the trailer', '🎞️ Saw it in the trailer', TRUE, 'user3@example.com', '2025-04-01 21:49:02', FALSE),
    (4, 5, 'This is spoiler #4 - 🥚 Easter Egg!', '🥚 Easter Egg!', TRUE, 'user4@example.com', '2025-02-15 21:49:02', FALSE),
    (5, 4, 'This is spoiler #5 - 👀 Surprise cameo!', '👀 Surprise cameo!', TRUE, 'user5@example.com', '2024-12-25 21:49:02', FALSE),
    (6, 2, 'This is spoiler #6 - 🤔 Interesting, but meh...', '🤔 Interesting, but meh...', TRUE, 'user6@example.com', '2024-10-26 21:49:02', FALSE),
    (7, 2, 'This is spoiler #7 - 🤔 Interesting, but meh...', '🤔 Interesting, but meh...', TRUE, 'user7@example.com', '2024-09-09 21:49:02', FALSE),
    (8, 4, 'This is spoiler #8 - 🥚 Easter Egg!', '🥚 Easter Egg!', FALSE, 'user8@example.com', '2024-09-01 21:49:02', FALSE),
    (9, 2, 'This is spoiler #9 - 👀 Surprise cameo!', '👀 Surprise cameo!', TRUE, 'user9@example.com', '2025-03-21 21:49:02', FALSE),
    (10, 2, 'This is spoiler #10 - 🤬 Why did you tell me this?', '🤬 Why did you tell me this?', TRUE, 'user10@example.com', '2024-05-23 21:49:02', FALSE),
    (11, 3, 'This is spoiler #11 - 🤬 Why did you tell me this?', '🤬 Why did you tell me this?', TRUE, 'user11@example.com', '2024-08-14 21:49:02', FALSE),
    (12, 3, 'This is spoiler #12 - 😱 Oh my god!', '😱 Oh my god!', TRUE, 'user12@example.com', '2024-12-25 21:49:02', FALSE),
    (13, 4, 'This is spoiler #13 - 🥚 Easter Egg!', '🥚 Easter Egg!', FALSE, 'user13@example.com', '2025-01-26 21:49:02', FALSE),
    (14, 4, 'This is spoiler #14 - 😱 Oh my god!', '😱 Oh my god!', TRUE, 'user14@example.com', '2024-06-15 21:49:02', FALSE),
    (15, 4, 'This is spoiler #15 - 😱 Oh my god!', '😱 Oh my god!', FALSE, 'user15@example.com', '2025-02-10 21:49:02', FALSE),
    (16, 2, 'This is spoiler #16 - 🥚 Easter Egg!', '🥚 Easter Egg!', FALSE, 'user16@example.com', '2024-07-27 21:49:02', FALSE),
    (17, 2, 'This is spoiler #17 - 👀 Surprise cameo!', '👀 Surprise cameo!', TRUE, 'user17@example.com', '2024-12-09 21:49:02', FALSE),
    (18, 3, 'This is spoiler #18 - 👀 Surprise cameo!', '👀 Surprise cameo!', FALSE, 'user18@example.com', '2024-12-03 21:49:02', FALSE),
    (19, 3, 'This is spoiler #19 - 🥚 Easter Egg!', '🥚 Easter Egg!', FALSE, 'user19@example.com', '2025-03-27 21:49:02', FALSE),
    (20, 5, 'This is spoiler #20 - 👀 Surprise cameo!', '👀 Surprise cameo!', TRUE, 'user20@example.com', '2024-09-13 21:49:02', FALSE);