import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold ">welcome to learnly Dashboard</h1>

      <Link href="/dashboard">
        <button className=" bg-emerald-200 mt-5 px-7 text-xl text-white rounded-md py-1">
          next
        </button>
      </Link>
    </div>
  );
}
