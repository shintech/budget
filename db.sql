DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE account (
  ID SERIAL PRIMARY KEY,
  balance NUMERIC,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

CREATE TABLE transactions (
  ID SERIAL PRIMARY KEY,
  amount NUMERIC,
  action VARCHAR,
  transaction_date TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO account ( balance )
VALUES ( 715.42 );


