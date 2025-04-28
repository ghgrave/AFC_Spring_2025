-- Insert into monster_type
INSERT INTO monster_type (name, description, special_ability) VALUES
                                                                  ('witch', 'Casts spells to hex opponent pieces.', 'Hex – disables enemy movement for 1 turn'),
                                                                  ('ghost', 'Can move through other monsters.', 'Phantom Move – ignore obstacles'),
                                                                  ('goblin', 'Small and fast, can double jump.', 'Double Jump – two moves in one turn'),
                                                                  ('zombie', 'Slow but revives once after capture.', 'Reanimate – respawn after being captured'),
                                                                  ('werewolf', 'Stronger at night.', 'Lunar Rage – double attack range every 5 turns'),
                                                                  ('vampire', 'Heals by capturing.', 'Drain Life – restores health or uncaptures another piece'),
                                                                  ('siren', 'Sings to confuse nearby enemies.', 'Charm – switches one enemy piece to your side');

-- Insert into monsters
INSERT INTO monsters (name, is_king, player_owner, position_row, position_col, is_captured, monster_type_id) VALUES
                                                                                                                 ('Wanda the Witch', FALSE, 1, 5, 0, FALSE, 1),
                                                                                                                 ('Casper the Ghost', FALSE, 1, 5, 2, FALSE, 2),
                                                                                                                 ('Gobby the Goblin', FALSE, 1, 5, 4, FALSE, 3),
                                                                                                                 ('Zed the Zombie', FALSE, 1, 5, 6, FALSE, 4),
                                                                                                                 ('Wolfie the Werewolf', FALSE, 2, 2, 1, FALSE, 5),
                                                                                                                 ('Vlad the Vampire', FALSE, 2, 2, 3, FALSE, 6),
                                                                                                                 ('Sally the Siren', FALSE, 2, 2, 5, FALSE, 7),
                                                                                                                 ('Grex the Goblin', TRUE, 1, 3, 3, FALSE, 3),
                                                                                                                 ('Mira the Mummy', FALSE, 2, 1, 1, FALSE, 4),
                                                                                                                 ('Phantom Fred', TRUE, 2, 0, 6, FALSE, 2);
