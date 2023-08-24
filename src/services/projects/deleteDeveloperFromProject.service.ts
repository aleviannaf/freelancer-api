import { client } from "../../database"

const deleteDeveloperFromProjectService = async (
    developerId: string,
    projectId: string
): Promise<void> => {
    const queryString: string = `
      DELETE FROM "developerProjects"
      WHERE "developerId" = $1
      AND "projectId" = $2;
    `

    await client.query(queryString, [developerId, projectId])
}

export { deleteDeveloperFromProjectService }