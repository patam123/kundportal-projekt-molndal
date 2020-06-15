INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry) VALUES('Volvo', 5.44, '00000000', 'Fordon');

INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry) VALUES('Ericsson', 0.44, '00000000', 'Telekom');

INSERT INTO Customer(Email, Password, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture) VALUES('example.person@example.com', 'example123', 'Example', 'Person', '198005051633', 'V�gen 1', '41501', 'G�teborg', '0700000000', 'Insert pic here');



INSERT INTO Share(CompanyId, Owner, Type) VALUES((SELECT Id FROM Company WHERE Id = 1), (SELECT Id FROM Customer WHERE Id = 1), 'B');



SELECT s.Type as Type, co.Name as Name, co.Industry as Industry, co.ShareNumber as ShareNumber, co.ShareWorth as ShareWorth FROM Share s INNER JOIN Company co ON s.CompanyId = co.Id WHERE s.Owner = 1;
SELECT * FROM Share;
SELECT * FROM Company;

SELECT Email, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber FROM Customer WHERE Id=2;