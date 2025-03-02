import { auth } from '@/server/auth';
import { UserButton } from './user-button';
import { Logo } from './logo';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
export const Nav = async () => {
  const session = await auth();

  return (
    <header className='py-8!'>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <Link href='/'>
              <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link href='/auth/login'>
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
