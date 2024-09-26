import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@workos-inc/authkit-react';

import { Button } from '../components/Button';
import { NavMenuItem } from './NavMenuItem';
import { NavMenu } from './NavMenu';
import { NavItem } from './NavItem';

import { providers, projects } from '../constants';
import { IcePerfLogo } from './IcePerfLogo';

export function Header() {
  const { user, isLoading, signIn, signUp, signOut } = useAuth();
  const location = useLocation();

  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm pb-2 sm:pb-0 dark:bg-neutral-800 dark:border-neutral-700'>


      <nav className='relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8' aria-label='Global'>
        <div className='flex items-center justify-between'>
          <Link className='flex-none text-xl font-semibold dark:text-white' to='/' aria-label='IcePerf'>
            <IcePerfLogo kind='side' />
          </Link>
          <div className='sm:hidden'>
            <button type='button' className='hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700' data-hs-collapse='#navbar-collapse-with-animation' aria-controls='navbar-collapse-with-animation' aria-label='Toggle navigation'>
              <svg className='hs-collapse-open:hidden flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='3' x2='21' y1='6' y2='6'/><line x1='3' x2='21' y1='12' y2='12'/><line x1='3' x2='21' y1='18' y2='18'/></svg>
              <svg className='hs-collapse-open:block hidden flex-shrink-0 size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 6 6 18'/><path d='m6 6 12 12'/></svg>
            </button>
          </div>
        </div>
        <div id='navbar-collapse-with-animation' className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'>
          <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
            <NavItem label='About' to='/about' />
            <NavItem label='Results' to='/results' />

            <NavMenu label='Providers'>
              {providers.map((provider, i) => (
                <NavMenuItem key={i} label={provider} to={`/providers/${provider.toLowerCase()}`}/>
              ))}
            </NavMenu>
            <NavMenu label='Projects'>
              {projects.map((project, i) => (
                <NavMenuItem key={i} label={project} to={`/projects/${project.toLowerCase()}`}/>
              ))}
            </NavMenu>

            {user ? (
              <>
                <NavItem label='Settings' to='/settings' />
                <Button
                  onClick={() => signOut()}
                  disabled={isLoading}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => signIn({ context: location.search, state: { returnTo: location.pathname } })}
                  disabled={isLoading}
                >
                  Login
                </Button>
                <Button
                  onClick={() => signUp()}
                  disabled={isLoading}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
