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
    "statusId" serial NOT NULL,
    status character varying NOT NULL,
    PRIMARY KEY ("statusId")
);

ALTER TABLE IF EXISTS status
    OWNER to postgres;

-- add status data
INSERT INTO status(status)
	VALUES ('Saved'),('Applied'),('Interviewing'),('Offer'),('Rejected');

--Application table
CREATE TABLE applications
(
    "applicationId" smallserial NOT NULL,
    "jobTitle" character varying(200) NOT NULL,
    "companyName" character varying(200),
    "jobLink" character varying,
    status integer,
    salary integer,
    location character varying(100),
    "contactPerson" character varying(200),
    notes character varying,
    "createdBy" integer,
    "creationTime" timestamp without time zone,
    "updatedBy" integer,
    "updationTime" timestamp without time zone,
    PRIMARY KEY ("applicationId")
);

ALTER TABLE IF EXISTS applications
    OWNER to postgres;