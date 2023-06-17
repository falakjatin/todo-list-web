import PageHeader from "@components/PageHeader";
import Link from "next/link";

export default function Root() {

  return (
    <>
      <PageHeader title="Root Page" />
      <Link href={'/login'}>Login</Link>
    </>
  )
}
