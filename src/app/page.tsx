"use client";

import React from "react";
import Image from "next/image";
import BlogPost from "@/components/BlogPost"; // Adjust the import path as necessary
import logo from "@/public/brand-logo.png"; // Adjust the import path as necessary
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-8 overflow-scroll">
      <Image src={logo} width={200} alt="Evan Hoizey Logo"></Image>
      <div className="flex flex-col gap-4 items-center w-[90%]">
        <h2 className="text-center font-bold text-3xl font-heading text-emerald-950">
          Welcome to my{" "}
          <span className="font-black text-emerald-950">react playground</span>{" "}
          !
        </h2>
        <BlogPost
          title="17/10/2024"
          content={
            <>
              <p>
                I'm currently working on a{" "}
                <strong>text editor component</strong> that allows you to write
                and format text content in an eye-pleasant design. It's a great
                way to create blog posts, articles or any text-based content. I
                plan on making it saveable in collections and collaborative.
              </p>
              <p>
                <strong>Update (17/10/2024)</strong>: Data is now saved in local
                storage to be persistent on refresh without the need to manually
                save.
              </p>
              <p>
                <strong>Update (19/10/2024)</strong>: Persistent data, saved in
                real-time in DB, removal and new note features and selection of
                existing notes to edit added. Name management also set up.
              </p>
              <p>
                <strong>Update (19/10/2024) 2</strong>: Notebook rehaul, now
                resizable and with soft animations when appearing.
              </p>
              <Link
                href={"/notes"}
                style={{ transition: "all 0.2s ease-in-out" }}
                className="bg-emerald-800 flex gap-2 items-center h-fit w-fit text-nowrap p-4 text-white hover:text-emerald-200 font-black rounded-lg font-heading shadow-xl hover:-translate-y-1"
              >
                <Icon icon="mdi:notebook" />
                <span>Note Taking Manager</span>
              </Link>
            </>
          }
        />
        <BlogPost
          title="16/10/2024 (WIP)"
          content={
            <>
              <p>
                Today, I've been working on a{" "}
                <strong>dynamic tab selector</strong> that allows you to switch
                between different content types. It's a great way to showcase
                work or create a dynamic portfolio containing text, videos or
                any media that would auto-refresh over time.
              </p>
              <Link
                href={"/tabs"}
                style={{ transition: "all 0.2s ease-in-out" }}
                className="bg-emerald-800 flex gap-2 items-center h-fit w-fit text-nowrap p-4 text-white hover:text-emerald-200 font-black rounded-lg font-heading shadow-xl hover:-translate-y-1"
              >
                <Icon icon="fluent:tabs-16-filled" />
                <span>Dynamic Tabs Selector</span>
              </Link>
            </>
          }
        />
      </div>
    </div>
  );
}
