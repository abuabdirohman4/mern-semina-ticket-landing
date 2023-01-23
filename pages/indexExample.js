import Link from "next/link";
import { getData } from "../utils/fetchData";

export default function Home({ data }) {
  // console.log("data", data);
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>

      <div>
        <h1>Halaman Home</h1>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       data: [
//         {
//           id: 1,
//           name: "abu",
//         },
//       ],
//     }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  const req = await getData("api/v1/events");
  const res = req.data;

  return {
    props: { data: res },
  };
}
