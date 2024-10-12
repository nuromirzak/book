import {Ubuntu} from "next/font/google";

const font = Ubuntu({subsets: ["latin"], weight: ["400", "700"]});

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return (
    <h1 className={`${font.className} text-3xl font-bold underline`}>
      Hello world!
    </h1>
  );
}
