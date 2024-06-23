"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  let resumeLink = process.env.NEXT_PUBLIC_RESUME || "";
  const router = useRouter();
  useEffect(() => {
    router.push(resumeLink);
  }, []);
  return (
    <div className="flex flex-row items-center justify-center text-center ySpace">
      <p className="text-center">
        You will be redirected. If not click{" "}
        <Link className="underline" href={resumeLink}>
          here
        </Link>
        . Or you could chose to go{" "}
        <Link className="underline" href="/">
          back
        </Link>
      </p>
    </div>
  );
};

export default Page;
