// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profile from "/public/images/profile.png";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title></title>
        <meta name="description" content="Full-Stack Developer & CAD Expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center  pb-10 pt-10 rounded-xl">
        <Image
          src={profile}
          alt="ROGER NAAH NAPUO"
          width={200}
          height={200}
          className="rounded-xl mx-auto  mb-4 border1"
        />
        <h1 className="text-4xl font-bold mb-2">Roger Naah Napuo</h1>
        <p className="text-xl text-gray-600 mb-4">
          Full-Stack Developer & CAD Expert
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Passionate about creating innovative solutions using cutting-edge
          technologies. Experienced in both web development and computer-aided
          design.
        </p>
        <div className="space-x-4">
          <Link
            href="/projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
