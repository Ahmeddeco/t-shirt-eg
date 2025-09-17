import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','image','mobile','role']);

export default UserScalarFieldEnumSchema;
