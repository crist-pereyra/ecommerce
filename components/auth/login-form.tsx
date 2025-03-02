'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';
import { AuthCard } from './auth-card';
import { loginSchema } from '@/validations/login.schema';
import { z } from 'zod';
import { InputField } from '../fields/input-field';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks';
import { emailSignIn } from '@/server/actions/email-signin';
import { cn } from '@/lib/utils';

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { execute, status } = useAction(emailSignIn, {});
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    execute(values);
  };
  return (
    <AuthCard
      cardTitle='Welcome back!'
      backButtonHref='/auth/register'
      backButtonLabel='Create a new account'
      showSocials
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <InputField
                id='email'
                label='Email'
                form={form}
                placeholder='user@email.com'
                type='email'
                autoComplete='email'
              />
              <InputField
                className='mt-3!'
                id='password'
                label='Password'
                form={form}
                type='password'
                placeholder='********'
                autoComplete='current-password'
              />
              <Button size='sm' variant='link' asChild type='button'>
                <Link href={'/auth/reset'}>Forgot your password</Link>
              </Button>
            </div>
            <Button
              type='submit'
              className={cn(
                'w-full my-2!',
                status === 'executing' ? 'animate-pulse' : ''
              )}
            >
              {'Login'}
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
};
