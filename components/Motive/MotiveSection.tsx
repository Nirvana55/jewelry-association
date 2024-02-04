import { Blockquote } from "flowbite-react";
import React from "react";
import { MdBusinessCenter } from "react-icons/md";

const MotiveSection = () => {
  return (
    <section className='bg-background-primary'>
      <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-14'>
        <div className='mb-8 mx-auto lg:mb-16 text-center max-w-screen-sm'>
          <h2 className='titleFont text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            Our Main Motive
          </h2>
          <Blockquote className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            &quot;Unite in Brilliance, Sparkle in Unity: Together, we elevate
            the artistry, integrity, and future of the jewelry industry. &quot;
          </Blockquote>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 py-5'>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-test'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-10 dark:text-primary-300 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Networking and Collaboration
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Showcase the association&aspos;s commitment to facilitating
              connections and collaborations within the jewelry industry. This
              can include events, forums, and platforms that bring together
              professionals for networking opportunities.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-test'>
              <svg
                className='w-5 h-5 text-primary-600  lg:w-6 lg:h-10 dark:text-primary-300 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
                <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
              </svg>
            </div>{" "}
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Education and Training:
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Highlight the association&aspos;s dedication to advancing the
              skills and knowledge of its members. This may involve promoting
              workshops, seminars, and educational resources that cover various
              aspects of the jewelry industry, such as design trends, gemology,
              and business practices.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-test'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-10 dark:text-primary-300 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>{" "}
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Ethical Standards and Industry Advocacy
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Emphasize the organization&aspos;s focus on promoting ethical
              standards and advocating for the interests of the jewelry
              industry. This can include information on the association&aspos;s
              efforts to establish and maintain high ethical standards and its
              involvement in advocating for favorable regulations and policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotiveSection;
