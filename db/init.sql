drop table if exists users;

create table if not exists users (
  id serial primary key,
  auth0_id text unique,
  email text,
  photo text,
  name text
);