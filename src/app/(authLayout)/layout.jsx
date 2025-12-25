"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";

const AuthLayout = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "unauthenticated") return <div>{children}</div>
  if (status === "loading") return <Loading />

  return null;
};

export default AuthLayout;
