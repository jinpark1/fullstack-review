insert into users (auth0_id, email, photo, name)
values (${auth0_id}, ${email}, ${photo}, ${name})
returning *;