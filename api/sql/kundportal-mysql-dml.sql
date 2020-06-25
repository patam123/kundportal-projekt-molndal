-- Inserta brancher, Color motsvarar en färgkod i css

INSERT INTO Industry(Name, Color) VALUES ('Byggsektorn', '#363636');

INSERT INTO Industry(Name, Color) VALUES ('Medtech');
INSERT INTO Industry(Name, Color) VALUES ('Fastighet');
INSERT INTO Industry(Name, Color) VALUES ('Industri');
INSERT INTO Industry(Name, Color) VALUES ('Finans');
INSERT INTO Industry(Name, Color) VALUES ('Övrigt');

-- Inserta företag

INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry, TotalShares) VALUES('Volvo', 5.44, '0000-0000', (SELECT Id FROM Industry WHERE Name = 'Industri'), 100000000);

INSERT INTO Company (Name, ShareWorth, ShareNumber, Industry, TotalShares) VALUES('Ericsson', 0.44, '0000-0000', (SELECT Id FROM Industry WHERE Name = 'Övrigt'), 10000000);

-- Inserta Användare

INSERT INTO Customer(Email, Hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture) VALUES('example.person@example.com', 'example123', 'Example', 'Person', '198005051633', 'Vägen 1', '41501', 'Göteborg', '0700000000', '/profileimg.png');

-- Inserta Aktie

INSERT INTO Share(CompanyId, Owner, Type) VALUES((SELECT Id FROM Company WHERE Id = 1), (SELECT Id FROM Customer WHERE Id = 1), 'B');

-- Duplicera data till Share

INSERT INTO SHARE(CompanyId, Owner, Type) SELECT CompanyId, Owner, Type FROM SHARE;


