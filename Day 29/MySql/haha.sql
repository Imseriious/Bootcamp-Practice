INSERT 
INTO `region`
(`name`,`slug`)
VALUES
('Eastern Europe','eastern-europe')
--Another one
INSERT 
INTO `region`
(`name`,`slug`)
VALUES
('Wastern Europe','western-europe')
--Random example
INSERT 
INTO `studemt`
(`name`,`overall_rating`,`nationality`,`age`,`is_deceased`)
VALUES
('Sam','5.9','ro','maybe')
--Damn son
INSERT
INTO `users`
(`username`, `email`)
VALUES
('bruce', 'bruce@wayne.com'),
('alfred', 'alfred@wayne.com')
--Excersice
('Eastern Europe','eastern-europe')
--Another one
INSERT 
INTO `region`
(`name`,`slug`)
VALUES
('North America','north-america'),
('Central America','central-america'),
('South America','south-america');
--Selecting stuff
SELECT *
FROM `city`
WHERE `id` = 3339;
--Updating stuff
UPDATE `city`
SET `Name` = 'Prague'
WHERE `id` = 3339;
--Update more stuff
UPDATE `city`
SET `population` = 1294513
WHERE `id` = 3339;
--Multiple stuff update
UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `GovernmentForm` = 'US Territory';
--Retarded update
UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `HeadOfState` = 'George W. Bush';
--Updating multiple things
UPDATE `country`
SET `Population` = '300',
    `GNP` = '13.91'
WHERE `Name` = 'United States Minor Outlying Islands'
--Deleting Stuff
DELETE 
FROM `region`
WHERE `id` = 1
--Deleting multiple stuff
DELETE 
FROM `region`
WHERE `slug` LIKE '%america%'