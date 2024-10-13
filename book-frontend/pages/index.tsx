import {Ubuntu} from "next/font/google";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {BookService} from "@/api";
import React from "react";
import {configureOpenAPI} from "@/config";

const font = Ubuntu({subsets: ["latin"], weight: ["400", "700"]});

type GetBooksReturnType = Awaited<ReturnType<typeof BookService.getBooks>>;

interface PageProps {
  books: GetBooksReturnType;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  configureOpenAPI();
  const books = await BookService.getBooks(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "*",
  );
  return {
    props: {
      books,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <React.Fragment>
      <main className={`${font.className} bg-amber-100`}>
        <h1>Books</h1>
        <pre>{JSON.stringify(props.books, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
}
