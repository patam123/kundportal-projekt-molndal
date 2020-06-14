INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry) VALUES('Volvo', 5.44, '00000000', 'Fordon');

INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry) VALUES('Ericsson', 0.44, '00000000', 'Telekom');

INSERT INTO Customer(Email, Password, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture) VALUES('example.person@example.com', 'example123', 'Example', 'Person', '198005051633', 'Vägen 1', '41501', 'Göteborg', '0700000000', 'Insert pic here');



INSERT INTO Share(CompanyId, Owner, Type) VALUES((SELECT Id FROM Company WHERE Id = 1), (SELECT Id FROM Customer WHERE Id = 1), 'B');




SELECT * FROM Share

;
SELECT * FROM Company;

SELECT Email, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber FROM Customer WHERE Id=2;