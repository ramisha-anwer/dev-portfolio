import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText'; 
import Form2 from '@/components/Form2';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/Ramisha2.jpg';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Head>
        <title>Ramisha's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-evenly w-full lg:flex-col">
            <div className="w-1/3 md:w-1/2 md:py-6">
              <Image
                src={profilePic}
                className="rounded-full w-full h-auto lg:hidden md:inline-block"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="text-base my-4 font-medium md:text-sm sm:text-xs">
                As a proficient full-stack developer, I transform concepts into captivating web solutions. Dive into my portfolio and articles to witness the synergy of React.js and intuitive design in action.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/CV.pdf" target="_blank" className="flex items-center p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg bg-dark text-light dark:bg-light dark:text-dark font-semibold text-lg hover:text-dark hover:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light border-solid border-transparent border-2 hover:border-dark">
                  Resume
                  <LinkArrow className="!w-[30px] !h-[30px] ml-2" />
                </Link>
                <button onClick={toggleModal} className="ml-4 text-lg underline underline-offset-2 capitalize text-dark font-medium dark:text-light md:text-base cursor-pointer">Contact</button>
              </div>
              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                 
                    <Form2 onClose={toggleModal} />
                 
                </div>
              )}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
