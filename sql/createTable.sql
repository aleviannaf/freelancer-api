CREATE TABLE IF NOT EXISTS developers(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL,
  "password" VARCHAR(120) NOT NULL,
  "active" BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS projects(
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(50) NOT NULL,
  "description" TEXT NOT NULL,
  "technology" VARCHAR(30) NOT NULL,
  "repository" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "developerProjects" (
	"id" SERIAL PRIMARY KEY,
	"startAt" TIMESTAMP DEFAULT NOW() NOT NULL,
	"developerId" INTEGER NOT NULL,
	FOREIGN KEY ("developerId") REFERENCES "developers"(id),
	"projectId" INTEGER NOT NULL,
	FOREIGN KEY ("projectId") REFERENCES "projects"(id)
);