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

CREATE TABLE comments (
    id INT not null AUTO_INCREMENT,
    customer_id VARCHAR(100) not null,
    title VARCHAR(100) not null,
    description TEXT,
    primary key (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE Innodb;

INSERT INTO comments(customer_id, title, description)
 VALUES ('47xr835myt', "Comment 1", 'sample comment 1'),
('47yr735myt', "Comment 2", 'sample comment 2'),
('47yr835myt', "Comment 3", 'sample comment 3'),
('47yr835uyt', "Comment 4", 'sample comment 4')

ALTER TABLE wallet ADD CONSTRAINT UNIQUE (customer_id);

ALTER TABLE products
ADD PRIMARY KEY (id);


create table likes (
    customer_id VARCHAR(100) not null,
    product_id VARCHAR(100) not null,
    PRIMARY KEY (customer_id, product_id),
    constraint likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    constraint likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) engine innodb;

