CREATE TABLE product (
	product_id serial PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	price INT NOT NULL,
	image VARCHAR NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);