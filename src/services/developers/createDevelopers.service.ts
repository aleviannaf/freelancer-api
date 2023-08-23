import { hash } from "bcryptjs";
import { DeveloperRequest, DeveloperResult, DeveloperReturn } from "../../interfaces/developers.interfaces";
import format from "pg-format";
import { client } from "../../database";
import { developerWithoutPassword } from "../../schemas/developers.schemas";

const createDeveloperService =async (developerData: DeveloperRequest): Promise<DeveloperReturn> => {
    developerData.password = await hash(developerData.password, 10)

    const queryString: string = format(
        `
        INSERT INTO developers (%I)
        VALUES (%L)
        RETURNING *; 
        `,
        Object.keys(developerData),
        Object.values(developerData)
    )

    const queryResult: DeveloperResult = await client.query(queryString)

    return developerWithoutPassword.parse(queryResult.rows[0])
}

export default createDeveloperService