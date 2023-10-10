import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductCart from "./components/ProductCart/ProductCart";

export default function Home() {
  return (
    <main>
      <h3>Hello world</h3>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}
