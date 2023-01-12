import React from 'react';
import { useEffect, useState, useContext } from 'react';
import router, { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import image from '../image';
// -----------------------------------------ItemGroup-------------------------------------------------
const ItemsGroup = ({ isMobile, active, setIsShown }) => {
    const modalRef = useRef(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsShown(false);
        }
      };

    return (
        <div
        onClick={handleClickOutside}
        className="fixed top-20 inset-x-0 z-10 flex justify-end"
        >
        <div 
        ref={modalRef}
        className="flex flex-col bg-white dark:bg-prim-dark rounded-lg shadow-xl w-1/5"
        >        
        <ul>
           <li
            className={`flex justify-center font-poppins items-center font-semibold text-lg 
            hover:text-prim-black-4 dark:hover:text-white mx-3 text-prim-gray-2 
            ${
              active === 'Import'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-base'}
            `}
          >
            <Link href='/valueAdded'>{'Value-added Products'}</Link>
          </li>

          <li
            className={`flex justify-center font-poppins items-center font-semibold text-lg
            hover:text-prim-black-4 dark:hover:text-white mx-3 text-prim-gray-2 
            ${
              active === 'Import'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-base'}
            `}
          >
            <Link href='/fishAndOther'>{'Fish and ohters'}</Link>
          </li>
        </ul>
        </div>
        </div>
    )
  };
// ----------------------------------------------MenuItems-------------------------------------------
const MenuItems = ({ isMobile, active, setActive }) => {
    const [ isShown, setIsShown ] = useState(false)
    
    return (
      <ul className='flex flex-row'>
            <li
            onClick={() => {
              setActive('Home');
            }}
            className={`flex justify-center font-poppins items-center font-semibold text-base 
            hover:text-prim-black-4 dark:hover:text-white mx-10 text-prim-gray-2 
            ${
              active === 'Home'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-2xl'}
            `}
          >
            <Link href='/'>{'Home'}</Link>
          </li>

          <li
            onClick={() => {
              setActive('News');
            }}
            className={`flex justify-center font-poppins items-center font-semibold text-base 
            hover:text-prim-black-4 dark:hover:text-white mx-10 text-prim-gray-2 
            ${
              active === 'News'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-2xl'}
            `}
          >
            <Link href='/news'>{'News'}</Link>
          </li>

          <li
            onClick={() => {
              setActive('IContact');
            }}
            className={`flex justify-center font-poppins items-center font-semibold text-base 
            hover:text-prim-black-4 dark:hover:text-white mx-10 text-prim-gray-2 
            ${
              active === 'Contact'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-2xl'}
            `}
          >
            <Link href='/contact'>{'Contact'}</Link>
          </li>

          <li
            onClick={() => {
              setActive('Import');
            }}
            className={`flex justify-center font-poppins items-center font-semibold text-base 
            hover:text-prim-black-4 dark:hover:text-white mx-10 text-prim-gray-2 
            ${
              active === 'Import'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-2xl'}
            `}
          >
            <Link href='/import'>{'Import'}</Link>
          </li>
          
          <li
            onClick={() => {
              setActive('Export')
              setIsShown(true)}}
            onDoubleClick={() => setIsShown(false)}
            className={`flex justify-center font-poppins items-center font-semibold text-base 
            hover:text-prim-black-4 dark:hover:text-white mx-10 text-prim-gray-2 mr-36
            ${
              active === 'News'
                ? 'text-prim-black-4 dark:text-white'
                : 'text-prim-gray-2'
            }
            ${isMobile && 'my-3 text-2xl'}
            `}
          >
            <p className='hover:cursor-pointer'>Export</p>
          </li>

          {isShown && (
            <div>
            <ItemsGroup isMobile active setIsShown={setIsShown} />
            </div>
          )}
      </ul>
    );
  };

  const checkActive = (active, setActive, router) => {
    switch (router.pathname) {
      case '/':
        active !== 'Home' && setActive('Home');
        break;
      case '/news':
        active !== 'News' && setActive('News');
        break;
      case '/contact':
        active !== 'Contact' && setActive('Contact');
        break;
      case '/import':
        active !== 'Import' && setActive('Import');
        break;
      default:
        setActive('');
        break;
    }
  };

const Navbar = () => {
  
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Explore');
  const router = useRouter();

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

    return(
      <nav className='flex flex-row border-b-2 border-prim-gray-3 py-5'>
        <div className="flex justify-start flex-1 ml-7 mt-2">
        <Link href="/">
          <div className="flex flex-row items-center justify-center cursor-pointer md:hidden">
            <Image
              src={image.logo}
              width={55}
              height={55}
              alt="logo"
            />
            <p className="flex flex-row dark:text-white text-prim-black-1 font-extrabold font-poppins text-3xl ml-2 mt-1.5">
              VNFOODSCO
            </p>
          </div>
        </Link>
        </div>

        <div className='flex justify-end'>
            <MenuItems isMobile active={active} setActive={setActive}/>
        </div>

        <div className="mr-10 mt-5 hover:cursor-pointer">
        <Image
          src={image.moon}
          alt="toggle"
          width={28}
          height={28}
          objectFit='contain'
          className={`hover:cursor-pointer ${
                        theme === 'light' && 'filter invert'
                      }`}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
      </div>

      </nav>
    )
}

export default Navbar;