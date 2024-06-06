import Image from "next/image";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/todo')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AddProduct />

        <ViewProducts />


    </main>

  );
}
