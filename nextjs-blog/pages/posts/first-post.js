import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>İsa Duvan</h2>
      <Link href="/">
        <a> Back to home!</a>
      </Link>
    </>
  );
}
