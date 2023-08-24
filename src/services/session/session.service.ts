import { compare } from "bcryptjs";
import { client } from "../../database";
import { AppError } from "../../errors";
import {  DeveloperResult } from "../../interfaces/developers.interfaces";
import { SessionRequest } from "../../interfaces/session.interfaces";
import { QueryConfig } from "pg";
import { sign } from "jsonwebtoken";

const sessionService = async (
    sessionData: SessionRequest
): Promise<string> => {
    const queryString: string = `
     SELECT * FROM developers
     WHERE email = $1;
    `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [ sessionData.email]
    }
    
    const queryResult: DeveloperResult = await client.query(queryConfig)

    if(queryResult.rowCount === 0){
        throw new AppError("Username or password is incorrect", 401)
    }
    
    const matchPassword: boolean = await compare(sessionData.password, queryResult.rows[0].password)

    
    if(!matchPassword){
        throw new AppError("Username or password is incorrect", 401)
    }

    if(!queryResult.rows[0].active){
        throw new AppError("This developer is inactive", 401)
    }

    const token: string = sign(
        { email: queryResult.rows[0].email},
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: queryResult.rows[0].id.toString()
        }
    )
    return token
}

export default sessionService 