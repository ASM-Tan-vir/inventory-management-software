import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Inventory Management Software
      </h1>
      <Link
        href="/dashboard/home/overview"
        className="text-blue-600 hover:text-blue-800 font-medium underline"
      >
        View Dashboard
      </Link>
    </div>
  );
}
