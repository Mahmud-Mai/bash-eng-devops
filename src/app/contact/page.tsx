"use client";
import { Button } from "@material-tailwind/react";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col py-20 items-center justify-center w-full">
      <div className="w-3/5 text-center">
        <div className="py-8 text-3xl">
          <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
            Fill in the form to start a conversation
          </p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/40fec7eb-b27b-4d15-a5ae-8970bc50c161"
          className="flex flex-col w-full"
        >
          <input
            className="border border-gray-400 bg-transparent p-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="border border-gray-400 my-4 p-4 bg-transparent"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="border border-gray-400 bg-transparent p-4"
            name="message"
            placeholder="Message"
          ></textarea>
          <div className="mt-12 flex justify-center lg:justify-center">
            <Button
              size="lg"
              className="rounded-full"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
