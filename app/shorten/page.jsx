"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        alert(result.message);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="flex justify-center flex-col items-center mt-10 gap-2 ">
      <div className="text-4xl font-serif mt-3 text-purple-800">
        Generate your shorten Url here😁
      </div>
      <div className="w-[35%] h-1 bg-gradient-to-r from-violet-800 via-purple-500 to-pink-500"></div>
      <div className="flex flex-col gap-5 mt-14  bg-violet-300 rounded-lg  py-16 px-14 drop-shadow-xl ">
        <input
          type="text"
          value={url}
          placeholder="Enter your url to be shorten"
          onChange={(e) => setUrl(e.target.value)}
          className="py-3 pr-10 pl-5 focus:outline-purple-500 rounded-lg bg-purple-400 focus:bg-purple-300 focus:placeholder-purple-400 text-purple-900 placeholder-purple-200"
        />
        <input
          type="text"
          value={shortUrl}
          placeholder="Enter your preffered short url"
          onChange={(e) => setShortUrl(e.target.value)}
          className="py-3 pr-18 pl-5  focus:outline-purple-500 rounded-lg focus:bg-purple-300 focus:placeholder-purple-400 bg-purple-400 text-purple-900 placeholder-purple-200"
        />
        <button
          onClick={generate}
          type="button"
          className="text-white bg-gradient-to-r font-sans from-purple-800 to-violet-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate Url
        </button>

        { generated && <code>
           <span className="font-bold underline">Your Link</span>:- <Link target="_blank" href={generated}> {generated}</Link>
            </code>
        }
      </div>
    </section>
  );
};

export default shorten;
