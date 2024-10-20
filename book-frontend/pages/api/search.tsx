import type {NextApiRequest, NextApiResponse} from "next";
import {configureOpenAPI} from "@/config";
import {BookListResponse, BookService} from "@/api";

// eslint-disable-next-line import/no-default-export
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookListResponse>
) {
  configureOpenAPI();
  const isbn = String(req.query.isbn);
  const data = await BookService.getBooks(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    1,
    undefined,
    "*",
    {"isbn": {$eq: isbn}},
  );
  res.status(200).json(data);
}
