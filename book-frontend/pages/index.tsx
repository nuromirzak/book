import {Ubuntu} from "next/font/google";
import {BookService, Book} from "../openapi";
import React, {useEffect, useState} from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {getImageForBook} from "@/lib/getImageForBook";
import {BookDialog} from "@/components/BookDialog";
import {Button} from "@/components/ui/button";
import {BarcodeScannerModal} from "@/components/BarcodeScanner";
import {useQuery, keepPreviousData} from "@tanstack/react-query";
import {configureOpenAPI} from "@/config";
import {useRouter} from "next/router";
import {useErrorNotification} from "@/hooks/use-error-notification";

const font = Ubuntu({subsets: ["latin"], weight: ["400", "700"]});

// eslint-disable-next-line import/no-default-export
export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const router = useRouter();
  const page = Number(router.query.page) || 1;
  const searchQuery = router.query.q ? String(router.query.q) : null;

  useEffect(() => {
    configureOpenAPI();
  }, []);

  const {
    data: booksData,
    isError: isBooksError,
  } = useQuery({
    queryFn: () => {
      return BookService.getBooks(
        undefined,
        true,
        page - 1,
        25,
        undefined,
        undefined,
        undefined,
        "*",
      );
    },
    queryKey: ["books", page],
    placeholderData: keepPreviousData,
  });

  const {
    data: searchResults,
    isError: isSearchError,
  } = useQuery({
    queryFn: () => {
      return BookService.getBooks(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        1,
        undefined,
        "*",
        {"isbn": {$eq: searchQuery}},
      );
    },
    queryKey: ["search", searchQuery],
    enabled: Boolean(searchQuery),
  });

  useEffect(() => {
    if (searchResults && searchResults.data && searchResults.data.length > 0) {
      setSelectedBook(searchResults.data[0]);
    }
  }, [searchResults]);

  useErrorNotification({
    isError: isBooksError,
    title: "Кітаптарды алуда қате кетті",
  });

  useErrorNotification({
    isError: isSearchError,
    title: `ISBN коды ${searchQuery} бойынша кітап табылмады`,
  });

  return (
    <div className={`${font.className} container mx-auto px-4 py-8`}>
      <header className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <h1 className="text-2xl font-bold text-primary">Кітаптар</h1>
        <BarcodeScannerModal onScan={(barcode) => {
          router.push({
            query: {...router.query, q: barcode},
          }, undefined, {shallow: true});
        }}/>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {booksData && booksData.data && booksData.data.map((book) => {
          const imageInformation = getImageForBook(book);
          return (
            <Card
              key={book.id}
              className="cursor-pointer hover:shadow-lg transition-shadow flex flex-col h-full"
              onClick={() => {
                return setSelectedBook(book);
              }}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative w-full h-48">
                  <Image
                    src={imageInformation.url}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes={"100%"}
                    className="object-contain rounded-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">Толығырақ көру</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Dialog open={selectedBook !== null} onOpenChange={() => {
        setSelectedBook(null);
        router.push({
          query: { ...router.query, q: undefined },
        }, undefined, {shallow: true});
      }}>
        <DialogContent className="sm:max-w-[625px]">
          <BookDialog selectedBook={selectedBook}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
