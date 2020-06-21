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



-- Hämta till Portfolio

SELECT co.Name as companyName,
  s.Type as type, SUM(co.ShareWorth) as shareValue,
  Count(0) as amount,
  i.Name as industry,
  co.ShareNumber as shareNumber,
  ((SELECT COUNT(0) * 1.0 FROM Share WHERE Owner = c.Id AND CompanyId = s.CompanyId) / co.TotalShares) * 100 as sharePct,
  ((SELECT COUNT(0) * 1.0 FROM Share WHERE Owner = c.Id AND CompanyId = s.CompanyId) / co.TotalShares) * 100 as votePct
  FROM Share s 
  INNER JOIN Company co ON co.Id = s.CompanyId
  Inner JOIN Customer c ON s.Owner = c.Id
  Inner JOIN Industry i ON i.Id = co.Industry
  WHERE c.Email = 'example.person@example.com'
  Group by co.Name;



-- Hämta till possession

SELECT i.Name AS industry, 
co.Name AS company, 
SUM(co.ShareWorth) as shareValue 
FROM Industry i
INNER JOIN Company co
ON i.Id = co.Industry
INNER JOIN Share s
ON s.CompanyId = co.Id
INNER JOIN Customer c
ON c.Id = s.Owner
WHERE c.Id = 1
group by i.Name, co.Name

-- Random shit

SELECT s.Type as Type, co.Name as Name, co.Industry as Industry, co.ShareNumber as ShareNumber, co.ShareWorth as ShareWorth FROM Share s INNER JOIN Company co ON s.CompanyId = co.Id WHERE s.Owner = 1;


SELECT Email, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber FROM Customer WHERE Id=2;
