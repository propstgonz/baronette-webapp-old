CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.user_list (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    first_name varchar NULL,
    last_name_1 varchar NULL,
    last_name_2 varchar NULL,
    username varchar NOT NULL,
    user_password varchar NOT NULL,
    email varchar NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (id),
    CONSTRAINT user_username UNIQUE (username),
    CONSTRAINT user_email UNIQUE (email)
);

CREATE TABLE public.admin_list (
	admin_id uuid DEFAULT uuid_generate_v4() NOT NULL,
	user_id uuid NULL,
	CONSTRAINT admin_list_pk PRIMARY KEY (admin_id),
	CONSTRAINT admin_list_user_id UNIQUE (user_id),
	CONSTRAINT admin_list_user_fk FOREIGN KEY (user_id) REFERENCES public.user_list(id)
);