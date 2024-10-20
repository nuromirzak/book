import {Book} from "@/api";
import {DialogHeader, DialogTitle} from "@/components/ui/dialog";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";
import {getImageForBook} from "@/lib/getImageForBook";

interface BookDialogProps {
  selectedBook: Book | null;
}

export function BookDialog({selectedBook}: BookDialogProps) {
  if (!selectedBook) {
    return null;
  }

  const imageInformation = getImageForBook(selectedBook);
  return (
    <ScrollArea className="max-h-[80vh]">
      {selectedBook && (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedBook.title}</DialogTitle>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <Image
                src={imageInformation.url}
                alt={`Cover of ${selectedBook.title}`}
                width={imageInformation.width}
                height={imageInformation.height}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              {selectedBook.author && (
                <p className="font-semibold">Автор: {selectedBook.author}</p>
              )}
              {selectedBook.ageRating && (
                <p>Жас Ерекшелігі: {selectedBook.ageRating}+</p>
              )}
              {selectedBook.pages && (
                <p>Бет Саны: {selectedBook.pages} бет</p>
              )}
              {selectedBook.coverType && (
                <p>Қақпақ түрі: {selectedBook.coverType}</p>
              )}
              {selectedBook.isbn && (
                <p>ISBN: {selectedBook.isbn}</p>
              )}
            </div>
          </div>
          {selectedBook.description && (
            <>
              <Separator className="my-4"/>
              <div>
                <h3 className="font-semibold mb-2">Сипаттама</h3>
                <p>{selectedBook.description}</p>
              </div>
            </>
          )}
        </>
      )}
    </ScrollArea>
  );
}
