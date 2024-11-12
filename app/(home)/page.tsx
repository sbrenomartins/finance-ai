import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/app/_components/navbar";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/auth/login");
  }

  return (
    <>
      <Navbar />
      <SummaryCards />
    </>
  );
};

export default Home;
