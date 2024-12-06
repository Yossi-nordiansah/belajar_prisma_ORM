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

create table products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price int not null,
    stock int not null,
    category VARCHAR(100) not NULL
) ENGINE InnoDB;

INSERT INTO products(id, name, price, stock, category) 
VALUES ('P0001', 'A', 1000, 100, 'K1'), 
 ('P0002', 'B', 2000, 200, 'K1'), 
 ('P0003', 'C', 3000, 300, 'K1'),
 ('P0004', 'D', 4000, 400, 'K1'),
 ('P0005', 'E', 5000, 500, 'K1');

INSERT INTO products(id, name, price, stock, category) 
VALUES ('P0006', 'A', 1000, 100, 'K2'), 
 ('P0007', 'B', 2000, 200, 'K2'), 
 ('P0008', 'C', 3000, 300, 'K2'),
 ('P0009', 'D', 4000, 400, 'K2'),
 ('P0010', 'E', 5000, 500, 'K2');

 create table categories (
    id INT not null AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
) ENGINE InnoDB;

CREATE TABLE wallet (
    id VARCHAR(100) not null,
    balance int not null,
    customer_id VARCHAR(100) not null,
    primary key (id),
    constraint wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    constraint wallet_customer_id_unique UNIQUE (customer_id) 
) ENGINE Innodb