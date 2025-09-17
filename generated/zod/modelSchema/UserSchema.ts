import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullish(),
  mobile: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
