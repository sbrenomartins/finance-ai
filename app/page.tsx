import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/auth/login");
  }

  return (
    <>
      <Navbar />
      <h1>dashboard</h1>
    </>
  );
};

export default Home;
