
import Image from "next/image"
import React from "react"




const About = () => {
    return (
        <div >
            <section className="text-black bg-slate-200">
                <div className="relative mx-auto flex wrapper flex-col justify-between gap-10 text-center ">

                    <p>
                        Driving Innovation in Online Education for a
                    </p>

                    <p>
                        Studynotion is at the forefront of driving innovation in online
                        education. We're passionate about creating a brighter future by
                        offering cutting-edge courses, leveraging emerging technologies,
                        and nurturing a vibrant learning community.
                    </p>


                    <div className="sm:h-[70px] lg:h-[150px]"></div>

                    <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                    </div>
                </div>
            </section>

            <section className="border-b border-richblack-700">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="h-[100px] "></div>
                </div>
            </section>

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">

                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                With this vision in mind, we set out on a journey to create an
                                e-learning platform that would revolutionize the way people
                                learn. Our team of dedicated experts worked tirelessly to
                                develop a robust and intuitive platform that combines
                                cutting-edge technology with engaging content, fostering a
                                dynamic and interactive learning experience.
                            </p>
                        </div>

                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Reviws from Other Learner */}
            <div className=" my-20 px-5  ">
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other customers
                </h1>

                <div className="flex gap-5 mt-10 justify-center">
                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={'/assets/images/aniruddha.jfif'}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Prashant Nawale</p>

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.
                        </p>

                        <div className={'flex gap-2'}>
                            <p>5</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={'/assets/images/aniruddha.jfif'}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Aniruddha Gade</p>

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.
                        </p>

                        <div className={'flex gap-2'}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={'/assets/images/aniruddha.jfif'}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Sujay Pagam</p>

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.
                        </p>

                        <div className={'flex gap-2'}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={'/assets/images/tatya-vinchu.jpg'}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Tatya Vinchu</p>

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque.
                        </p>

                        <div className={'flex gap-2'}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About
// <div className="container mx-auto px-4 py-8">
//     <h1 className="text-3xl font-bold mb-4">About Us</h1>
//     <p className="mb-4">
//         Welcome to our website! We are dedicated to providing high-quality products and services to our customers.
//  Q   </p>
//     <p className="mb-4">
//         Our mission is to exceed customer expectations by delivering innovative solutions that enhance their lives.
//     </p>
//     <p className="mb-4">
//         At our company, we value integrity, professionalism, and customer satisfaction above all else. We strive to build long-lasting relationships with our clients based on trust and reliability.
//     </p>
//     <p className="mb-4">
//         Whether you're a new customer or a returning one, we look forward to serving you and meeting your needs.
//     </p>
//     <p className="mb-4">
//         Thank you for choosing us!
//     </p>
// </div>