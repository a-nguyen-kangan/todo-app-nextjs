import Image from "next/image";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AddProduct />

        <ViewProducts />


    </main>

  );
}
