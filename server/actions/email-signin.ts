'use server';
import { loginSchema } from '@/validations/login.schema';
import { createSafeActionClient } from 'next-safe-action';

const actionClient = createSafeActionClient();
export const emailSignIn = actionClient
  .schema(loginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log(email, password, code);
    return { email, password, code };
  });
