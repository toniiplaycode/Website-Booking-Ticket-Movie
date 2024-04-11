use booking_ticket_movie;

ALTER TABLE users ADD CONSTRAINT fk_user_role FOREIGN KEY(roleId) REFERENCES roles(id);

ALTER TABLE tickets ADD CONSTRAINT fk_tickets_users FOREIGN KEY(userId) REFERENCES users(id);

ALTER TABLE tickets ADD CONSTRAINT fk_tickets_films FOREIGN KEY(filmId) REFERENCES films(id);

ALTER TABLE tickets ADD CONSTRAINT fk_tickets_cinemas FOREIGN KEY(cinemaId) REFERENCES cinemas(id);

ALTER TABLE tickets ADD CONSTRAINT fk_tickets_calendarreleases FOREIGN KEY(calendarReleaseId) REFERENCES calendarreleases(id);

ALTER TABLE films ADD CONSTRAINT fk_films_typefilms FOREIGN KEY(typeFilmId) REFERENCES typefilms(id);

ALTER TABLE coments ADD CONSTRAINT fk_coments_users FOREIGN KEY(userId) REFERENCES users(id);

ALTER TABLE coments ADD CONSTRAINT fk_coments_films FOREIGN KEY(filmId) REFERENCES films(id);

ALTER TABLE calendarreleases ADD CONSTRAINT fk_calendarreleases_cinemarooms FOREIGN KEY(cinemaRoomId) REFERENCES cinemarooms(id);

ALTER TABLE calendarreleases ADD CONSTRAINT fk_calendarreleases_films FOREIGN KEY(filmId) REFERENCES films(id);

ALTER TABLE calendarreleases ADD CONSTRAINT fk_calendarreleases_showtimes FOREIGN KEY(showTimeId) REFERENCES showtimes(id);

ALTER TABLE calendarreleases ADD CONSTRAINT fk_calendarreleases_cinemas FOREIGN KEY(cinemaId) REFERENCES cinemas(id);

ALTER TABLE users ALTER roleId SET DEFAULT 'R3';




