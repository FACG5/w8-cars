BEGIN;
DROP TABLE IF EXISTS users,car CASCADE;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 user_name TEXT NOT NULL,
 email TEXT NOT NULL UNIQUE,
 password TEXT NOT NULL
);

CREATE TABLE car (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL,
user_id INTEGER REFERENCES users(id),
price VARCHAR,
img_car VARCHAR
);



INSERT INTO users(user_name,email,password) VALUES ('ssss','a@gmail.com','111i');
INSERT INTO car(title,description,user_id,price,img_car) VALUES
('BMW M5 ','he 2018 BMW M5 may have 600 horsepower, but its a refined and buttoned-up 600 hp, like that one wedding guest who never loosens his necktie even at the end of the night',1,'10000$','https://www.cstatic-images.com/stock/1170x1170/57/img-2076032684-1527017434457.jpg'),
('BMW X2 ',' The verdict: BMW has created an SUV version of a drivers car, but it lacks the interior space to be considered a good SUV.Versus the competition: The X2 holds up very well among competitors dynamically, but rivals like the Volvo XC40 beat it handily on value and spaciousness.',1,'20000$','https://www.cstatic-images.com/stock/1170x1170/91/img-552536118-1532973505091.jpg'),
('QX50','The verdict: The redesigned Infiniti QX50 is a smallish luxury SUV with promising technology and a lush, roomy interior, but it has a few warts.Versus the competition: The QX50 placed third among seven compact luxury SUVs in Cars.coms Luxury Compact SUV Challenge — a credit to its strong overall utility — but its drivability is lackluster and its missing some desirable features.',1,'10000$','https://www.cstatic-images.com/stock/1170x1170/23/img35840397-1532967632323.jpg'),
('Jeep Cherokee','The verdict: Though Lexus popular SUV is longer now, to fit a third row, the 2018 RX 350L still has only two truly usable rows. Its luxury and interior quality are highlights, but you get the same thing for less money in a regular RX 350.Versus the competition: If you’re looking for a usable third row, opt for a competitor with a better one, such as the Audi Q7 or Infiniti QX60. ',1,'10000$','https://www.cstatic-images.com/stock/1170x1170/60/img70880942-1526313013860.jpg');


COMMIT;

