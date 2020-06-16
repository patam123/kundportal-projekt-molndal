Create database CustomerPortal;



Use CustomerPortal;


Create table Customer (

Id INT auto_increment NOT NULL,

Email NVARCHAR(100) UNIQUE NOT NULL,
Password NVARCHAR(25) NOT NULL,

FirstName NVARCHAR(50) NOT NULL,
LastName NVARCHAR(50) NOT NULL,

PersonNumber NVARCHAR(12) NOT NULL,

Address NVARCHAR(50) NOT NULL,

PostCode NVARCHAR(10) NOT NULL,

PostAddress NVARCHAR(50) NOT NULL,

PhoneNumber NVARCHAR(12) NOT NULL,

ProfilePicture NVARCHAR(255) NOT NULL,


PRIMARY KEY(Id),

CONSTRAINT Password_length CHECK (length(Password) > 8));



CREATE TABLE Company(

Id INT auto_increment NOT NULL,

Name NVARCHAR(100) NOT NULL,

ShareWorth DECIMAL(16,4) NOT NULL,

ShareNumber NVARCHAR(8) NOT NULL,

Industry NVARCHAR(50) NOT NULL,

TotalShares INT NOT NULL,

PRIMARY KEY(Id)
);



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



-- Kanske egen tabell f�r Industry?

