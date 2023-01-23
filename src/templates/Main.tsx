import Image from 'next/image';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div
    className="w-{910px} mr-auto ml-auto px-1 text-gray-700 antialiased"
    style={{ maxWidth: '910px' }}
  >
    {props.meta}

    <div className="max-w-{910px}">
      <div>
        <nav className="grid grid-cols-2 mt-3 h-{200px} bg-white border-blue-500 border-4 rounded-2xl ml-{-2px} mr-{-2px} p-6">
          <div className="">
            <Image
              src={'/rwth/comsys.png'}
              width={366}
              height={118}
              alt="ComSys Logo"
            />
          </div>
          <div className="block">
            <div className="grid justify-end">
              <Image
                src={'/rwth/rwth.png'}
                width={150}
                height={41}
                alt="RWTH Aachen Logo"
              />
            </div>
            <ul className="flex flex-row">
              <li className="m-4">
                <Image
                  src={'/rwth/home.png'}
                  width={70}
                  height={70}
                  alt="Home Icon"
                />
              </li>
              <li className="m-4">
                <Image
                  src={'/rwth/team.png'}
                  width={70}
                  height={70}
                  alt="Team Icon"
                />
              </li>
              <li className="m-4">
                <Image
                  src={'/rwth/teaching.png'}
                  width={70}
                  height={70}
                  alt="Teaching Icon"
                />
              </li>
              <li className="m-4">
                <Image
                  src={'/rwth/research.png'}
                  width={70}
                  height={70}
                  alt="Research Icon"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="content mt-6 rounded-2xl border-4 border-blue-500 bg-white p-6 text-xl">
        {props.children}
      </div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()}{' '}
        <a href="comsys.rwth-aachen.de">ComSys-Lehrstuhl</a>. Dies ist nicht die
        echte ComSys-Lehrstuhl Webseite.
      </div>
    </div>
  </div>
);

export { Main };
