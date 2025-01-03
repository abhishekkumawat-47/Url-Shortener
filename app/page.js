import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-purple-500 bg-purple-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-serif sm:text-4xl text-3xl mb-4 font-medium text-purple-600">
             <span className="text-purple-800 font-semibold">BitLinks </span> - <span className="font-serif">Your Url shortener website </span>
            </h1>
            <p className="mb-8 leading-tighter">
            Our website offers a seamless and efficient URL shortening service, designed to simplify long web addresses into compact, shareable links. Whether you're managing social media posts, creating marketing campaigns, or just sharing links with friends, our tool ensures your URLs are easy to remember and visually appealing. With robust analytics, you can track click-through rates and user engagement, gaining valuable insights into your link performance. The platform is user-friendly, secure, and supports customization, allowing you to create branded short links that align with your identity. Experience hassle-free URL management with our reliable shortening solution!
            </p>
            <div className="flex justify-center">
              <Link href="/shorten" className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 font-medium font-sans focus:outline-none rounded-lg hover:bg-purple-700  text-lg">
              Try Now
              </Link>
              <Link href="https://github.com/abhishekkumawat-47/Url-Shortener" className="ml-4 font-sans font-semibold inline-flex text-purple-800 border-purple-800 border-2 rounded-lg py-2 px-6 focus:outline-none hover:bg-purple-700 hover:text-white  text-lg">
                GitHub
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
            width={600} height={720}
              className="object-cover object-center rounded-lg mix-blend-darken"
              alt="hero"
              src={"/herosection.jpg"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
