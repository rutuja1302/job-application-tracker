--table for storing user details

CREATE TABLE users
(
    id serial NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL UNIQUE,
    password character varying NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS users
    OWNER to postgres;


-- Job Application status
CREATE TABLE status
(
    status_id serial NOT NULL,
    status character varying NOT NULL,
    PRIMARY KEY (status_id)
);

ALTER TABLE IF EXISTS status
    OWNER to postgres;

-- add status data
INSERT INTO status(status)
	VALUES ('Saved'),('Applied'),('Interviewing'),('Offer'),('Rejected');

--Application table
CREATE TABLE applications
(
    application_id smallserial NOT NULL,
    job_title character varying(200) NOT NULL,
    company_name character varying(200),
    job_link character varying,
    status integer,
    salary integer,
    location character varying(100),
    contact_person character varying(200),
    notes character varying,
    user_id integer NOT NULL,
    created_by integer,
    creation_time timestamp without time zone,
    updated_by integer,
    updation_time timestamp without time zone,
    PRIMARY KEY (application_id)
);

ALTER TABLE IF EXISTS applications
    OWNER to postgres;