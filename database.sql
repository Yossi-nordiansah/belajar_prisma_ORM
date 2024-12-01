create table sample (
    id varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
)engine innodb;

SELECT * FROM sample;

create table customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone VARCHAR (100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) ENGINE InnoDB;