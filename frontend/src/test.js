const runSQL = require('./runsql.js');
// const password = require('./secret/donotread.js');

runSQL("ALTER TABLE api toDestination")

runSQL(`
    CREATE TABLE review(
        ID int AUTO_INCREMENT NOT NULL,
        PersonID int NOT NULL,
        Title varchar(100),
        Text varchar(1023),
        PRIMARY KEY (ID),
        FOREIGN KEY (PersonID) REFERENCES Persons(id)
    )   
`);