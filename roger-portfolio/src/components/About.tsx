// pages/about.tsx
import Head from "next/head";
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About - Roger Naah Napuo</title>
        <meta
          name="description"
          content="About Roger Naah Napuo - Full-Stack Developer & CAD Expert"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              University of Mines and Technology(SRID) Mechanical Engineering ·
              (January 2022 - September 2025)
            </li>
            <li>
              QUEEN OF PEACE SENIOR HIGH SCHOOL General Science (September 2017
              - September 2020)
            </li>
            <li>
              ST. PAUL'S METHODIST JUNIOR HIGH SCHOOL,(August 2014 - June 2017)
            </li>
          </ul>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

            <div>
              <h2 className="text-xl font-semibold mb-4">Web Development</h2>
              <ul className="list-disc list-inside mb-6">
                <li>
                  Self-employed Frontend Developer February 2024 - August 2024
                  (7 months)
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Cad-SolidWorks</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Fish Dryer Design June 2023 - July 2024</li>
                <li>Smart Bed Design May 2023 - July 2023 </li>
                <li> Solar Dryer Design May 2022 - February 2023</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Educational</h2>
              <ul className="list-disc list-inside mb-6">
                <li>
                  TUPASO CENTER OF ACADEMIC EXCELLENCE <br />
                  Mathematics teacher brFebruary 2021 - January 2022 (1 year)
                </li>
                <li>
                  ZACK- PREMIER CLASSES <br />
                  Chemistry teacher <br /> November 2020 - December 2020 (2
                  months)
                </li>
                <li>
                  Science Department of Queen of Peace Senior High School <br />
                  Physics lab technician
                  <br />
                  September 2019 - September 2020 (1 year 1 month)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Web Development: React, Next.js, TypeScript, Python, Django</li>
            <li>CAD: SolidWorks, AutoCAD</li>
            <li>Database: SQLite, PostgreSQL</li>
            <li>Version Control: Git, GitHub</li>
          </ul>

          {/* <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside mb-6">
            <li>AWS Certified Developer - Associate</li>
            <li>SOLIDWORKS Associate (CSWA)</li>
          </ul> */}

          <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
          <p className="text-gray-700">
            When I'm not coding or designing, you can find me hiking in the
            mountains, reading sci-fi novels, or experimenting with new cooking
            recipes.
          </p>
        </div>
      </div>
    </div>
  );
}
