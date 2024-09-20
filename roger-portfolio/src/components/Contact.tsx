// pages/contact.tsx
"use client";
import Head from "next/head";
import { useState } from "react";
import React from "react";
import profile from "/public/images/profile.png";
import Image from "next/image";
import { Github, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Contact - Your Name</title>
        <meta
          name="description"
          content="Contact Your Name - Full-Stack Developer & CAD Expert"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ex. Name here"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email here."
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Ex. Message here"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>

        <div>
          <Image
            src={profile}
            alt="Desert background"
            width={400}
            height={400}
            className="w-24 h-24 border-black border-2 rounded-xl"
          />
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: rogernapuo1999@gmail.com</p>
          <p className="mb-2">Phone: (+233) 546-875-166</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Social Media</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://linkedin.com/in/rogernaahnapuo"
                className="flex gap-3 text-blue-500 hover:text-blue-700"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/roger9696"
                className="flex gap-3 text-blue-500 hover:text-blue-700"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
