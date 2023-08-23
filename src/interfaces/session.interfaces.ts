import { z } from "zod";
import { sessionSchema } from "../schemas/session.schemas";

export type SessionRequest = z.infer<typeof sessionSchema>;