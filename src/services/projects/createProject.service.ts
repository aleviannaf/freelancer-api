import format from "pg-format";
import { client } from "../../database";
import { Project, ProjectResult, ProjectsRequest } from "../../interfaces/projects.interfaces";

const createProjectService =async (projectData: ProjectsRequest): Promise<Project> => {
    
    const queryString: string = format(
        `
        INSERT INTO projects (%I)
        VALUES (%L)
        RETURNING *; 
        `,
        Object.keys(projectData),
        Object.values(projectData)
    )

    const queryResult: ProjectResult = await client.query(queryString)

    return queryResult.rows[0]
}

export { createProjectService }
