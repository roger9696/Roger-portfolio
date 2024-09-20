import Image from "next/image";
import Link from "next/link";
import profile from "/public/images/profile.png";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#87CEEB] p-4">
      <div className="relative w-full max-w-3xl">
        <Image
          src={profile}
          alt="Desert background"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4 max-w-md">
            <p className="text-[#2C3E50] text-xl font-semibold text-center">
              This is not the web page you are looking for.
            </p>
          </div>
          <div className="flex items-end space-x-4">
            <Image
              src="/placeholder.svg?height=200&width=150"
              alt="Jedi character"
              width={150}
              height={200}
              className="w-auto h-48"
            />
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Landspeeder"
              width={200}
              height={100}
              className="w-auto h-24"
            />
          </div>
          <Link
            href="/"
            className="mt-8 px-6 py-3 bg-[#2C3E50] text-white rounded-full hover:bg-[#34495E] transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
