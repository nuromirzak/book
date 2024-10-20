import {Ubuntu} from "next/font/google";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Book, BookListResponse, BookService} from "@/api";
import React, {useEffect, useState} from "react";
import {configureOpenAPI} from "@/config";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {getImageForBook} from "@/lib/getImageForBook";
import {BookDialog} from "@/components/BookDialog";
import {Button} from "@/components/ui/button";
import {BarcodeScannerModal} from "@/components/BarcodeScanner";
import {useToast} from "@/hooks/use-toast";

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
export default function Home({books}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [barcode, setBarcode] = useState<string | null>(null);
  const {toast} = useToast();
  const data = books.data;

  useEffect(() => {
    const fetchData = async (isbn: string): Promise<void> => {
      const response = await fetch(`/api/search?isbn=${isbn}`);
      if (response.ok) {
        const books = await response.json() as BookListResponse;
        if (books.data?.length && books.data.length > 0) {
          setSelectedBook(books.data[0]);
        } else {
          console.error("Book not found", books);
          toast({
            variant: "destructive",
            title: "Кітап табылмады",
            description: `ISBN ${isbn} бойынша кітап табылмады.`,
          });
        }
      } else {
        console.error("Failed to fetch book", response);
        toast({
          variant: "destructive",
          title: "Қате орын алды",
          description: "Кітапты іздеу барысында қате орын алды.",
        });
      }
    };
    if (barcode) {
      fetchData(barcode).catch(console.error);
    }
  }, [barcode, toast]);

  return (
    <div className={`${font.className} container mx-auto px-4 py-8`}>
      <header className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <h1 className="text-2xl font-bold text-primary">Кітаптар</h1>
        <BarcodeScannerModal onScan={(barcode) => {
          return setBarcode(barcode);
        }}/>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data && data.map((book) => {
          const imageInformation = getImageForBook(book);
          return (
            <Card
              key={book.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => {
                return setSelectedBook(book);
              }}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="outline" className="w-full">Толығырақ көру</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Dialog open={selectedBook !== null} onOpenChange={() => {
        setSelectedBook(null);
        setBarcode(null);
      }}>
        <DialogContent className="sm:max-w-[625px]">
          <BookDialog selectedBook={selectedBook}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
