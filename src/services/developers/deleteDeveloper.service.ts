import { client } from "../../database"

const deleteDeveloperService = async (developerId: string): Promise<void> => {
    const queryString: string = `
      UPDATE developers
      SET active = false
      WHERE ID = $1;
    `

    await client.query(queryString, [developerId])
}

export { deleteDeveloperService }