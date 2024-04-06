import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project from "../../public/images/projects/agency-website-cover-image.jpg"
import {motion} from "framer-motion"

const FramerImage=motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='relative w-full flex items-center p-12 rounded-3xl justify-between border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl dark:shadow-none'>
            
            <div className='absolute top-0 -right-3 -z-10 h-[103%] w-full rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target="_blank" className='w-1/2 rounded-lg overflow-hidden cursor-pointer'>
                <FramerImage
                  whileHover={{scale:1.05}}
                  transition={{duration:0.2}}
                src={img} alt={title} className="w-full h-auto"
                priority
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-light text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='flex mt-2 items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon className="!w-10 dark:text-light" /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark font-semibold p-2 px-6 text-lg'>Live Demo</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='flex flex-col w-full items-center justify-center rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative'>
            <Link href={link} target="_blank" className='w-full rounded-lg overflow-hidden cursor-pointer'>
            <FramerImage
                  whileHover={{scale:1.05}}
                  transition={{duration:0.2}} src={img} alt={title} className="w-full h-auto"
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-light text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light'>{title}</h2>
                </Link>

                <div className='w-full flex mt-2 items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline underline-offset-2 dark:text-light'>Live Demo</Link>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon className="!w-10 dark:text-light" /></Link>

                </div>
            </div>
        </article>
    )
}

function projects() {
    return (
        <>
            <Head>
                <title>Portfolio | Projects </title>
                <meta name='description' content="full stack developer portfolio" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProject
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                        <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                        <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects