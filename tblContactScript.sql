IF EXISTS(SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID('Contact'))
BEGIN;
    DROP TABLE [Contact];
END;
GO

CREATE TABLE [Contact] (
    [ContactId] INTEGER NOT NULL IDENTITY(1, 1),
    [FirstName] VARCHAR(255) NULL,
    [LastName] VARCHAR(255) NULL,
    [EmailAddress] VARCHAR(255) NULL,
    [Phone] VARCHAR(100) NULL,
    PRIMARY KEY ([ContactID])
);
GO

INSERT INTO [Contact] (FirstName,LastName,EmailAddress,Phone)
VALUES
  ('Channing','Crosby','praesent.eu@yahoo.ca','1-538-117-6257'),
  ('Fallon','Goodman','pede.malesuada.vel@icloud.net','(449) 411-6343'),
  ('Rhona','Lawrence','amet.consectetuer@yahoo.couk','1-439-872-1256'),
  ('Baker','Davenport','lacus.pede@icloud.com','1-801-661-4371'),
  ('Tate','Singleton','dictum.sapien@protonmail.net','(381) 565-2117'),
  ('Janna','Holder','pede@protonmail.couk','(953) 214-0107'),
  ('Judah','Wilder','vivamus.euismod@outlook.ca','1-773-714-4278'),
  ('Lois','Chen','odio@yahoo.net','(731) 322-7956'),
  ('Leilani','Bartlett','nunc.pulvinar.arcu@yahoo.org','(354) 166-7456'),
  ('Malcolm','Daniel','at.auctor@hotmail.com','(380) 515-6376');
