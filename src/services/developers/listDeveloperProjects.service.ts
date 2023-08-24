import { QueryResult } from "pg"
import { client } from "../../database"
import { AppError } from "../../errors"

const listDeveloperProjectsService = async (developerId: string) => {
    const queryString: string = `
        SELECT
        d."id" "developerId",
        d."name" "developerName",
        d."email" "developerEmail",
        d."active" "developerIsActive",
        p."id" "projectId",
            p."title" "projectTitle",
        p."description" "projectDescription",
        p."technology" "projectTechnology",
        p."repository" "projectRepository",
        dp."startAt" "projectStartDate"
        FROM developers d
        JOIN "developerProjects" dp
        ON d.id = dp."developerId"
        JOIN projects p
        ON p.id = dp."projectId"
        WHERE d.id = $1
    `

    const queryResult: QueryResult = await client.query(queryString, [developerId])

    if(queryResult.rowCount === 0){
        throw new AppError("There is no project linked to this developer", 404)
    }

    return queryResult.rows
}

export { listDeveloperProjectsService }