import { client } from "../../database"

const addDeveloperToProjectService = async (
    developerId: string, 
    projectId:string
): Promise<Object> => {
    const queryString: string = `
        INSERT INTO  "developerProjects"
            ("developerId","projectId")
        VALUES ($1, $2)
        RETURNING *;
    `
    await client.query(queryString, [developerId, projectId])

    return {message: "Developer linked to project"}
}

export { addDeveloperToProjectService  }