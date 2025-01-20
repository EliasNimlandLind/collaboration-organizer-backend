# Collaboration organizer

## About

The website supports user registration and login, using hashes. A logged in user is able to store preferences, eg., choosen color scheme. The frontend project can be found [here](https://github.com/EliasNimlandLind/collaboration-organizer-frontend.git).

## Built using

- JavaScript
- bcrypt
- cors
- express
  - express-jwt
- jsonwebtoken
- nodemon
- node
- postgreSQL
- uuid

## Setup

The database table storing user data can be created by executing:

```sql
CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    username character varying(50) COLLATE pg_catalog."default",
    password_hash character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
```

## Planned changes and features

- Translate all text to English
- Create a Python API to integrate articial intelligence and data analysis
  - Training
  - Using
- Create, replace, update and delete functionality on articles
- Being able to upload files such as articles written in advance
- TypeScript migration
