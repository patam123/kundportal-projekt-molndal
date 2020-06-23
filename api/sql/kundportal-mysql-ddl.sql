-- Om databasen redan finns:
-- DROP DATABASE CustomerPortal

Create database CustomerPortal;



Use CustomerPortal;


Create table Customer (

Id INT auto_increment NOT NULL,

Email NVARCHAR(100) UNIQUE NOT NULL,
Hash NVARCHAR(255) NOT NULL,

FirstName NVARCHAR(50) NOT NULL,
LastName NVARCHAR(50) NOT NULL,

PersonNumber NVARCHAR(12) NOT NULL,

Address NVARCHAR(50) NOT NULL,

PostCode NVARCHAR(10) NOT NULL,

PostAddress NVARCHAR(50) NOT NULL,

PhoneNumber NVARCHAR(12) NOT NULL,

ProfilePicture NVARCHAR(255),
PRIMARY KEY(Id));


CREATE TABLE Industry(
    Id INT auto_increment NOT NULL,
    Name NVARCHAR(100) NOT NULL,
    Color NVARCHAR(255) NOT NULL,

    PRIMARY KEY(Id));

CREATE TABLE Company(

Id INT auto_increment NOT NULL,

Name NVARCHAR(100) NOT NULL,

ShareWorth DECIMAL(16,4) NOT NULL,

ShareNumber NVARCHAR(9) NOT NULL,

Industry INT NOT NULL,

TotalShares INT NOT NULL,

PRIMARY KEY(Id),
FOREIGN KEY (Industry) REFERENCES Industry(Id));



CREATE TABLE Share(

Id INT auto_increment NOT NULL,

CompanyId INT NOT NULL,

Owner INT NOT NULL,

Type NVARCHAR(1) NOT NULL,

PRIMARY KEY(Id),

FOREIGN KEY(Owner) REFERENCES Customer(Id),

FOREIGN KEY (CompanyId) REFERENCES Company(Id));



CREATE INDEX Company_Search ON Company(Name, ShareWorth, Industry, ShareNumber);

CREATE INDEX Share_Search ON Share(Owner, CompanyId, Type);

CREATE INDEX Industry_Search ON Industry(Name);



