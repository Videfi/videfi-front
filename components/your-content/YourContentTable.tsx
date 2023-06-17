import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const invoices = [
  {
    thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    title: "Hello, Wolrd !",
    amount: "1/30",
    date: "10 Feb 2023",
    view: "123",
    tag: "Music",
    price: "10 ETH",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    title: "Hello, Wolrd !",
    amount: "1/30",
    date: "10 Feb 2023",
    view: "123",
    tag: "Music",
    price: "10 ETH",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    title: "Hello, Wolrd !",
    amount: "1/30",
    date: "10 Feb 2023",
    view: "123",
    tag: "Music",
    price: "10 ETH",
  },
];

export function YourContentTable() {
  return (
    <div className="mt-5 w-full border-y">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-10 w-[440px] text-gray-200">
              Content
            </TableHead>
            <TableHead className="text-gray-200">Amount</TableHead>
            <TableHead className="text-gray-200">Date</TableHead>
            <TableHead className="text-gray-200">View</TableHead>
            <TableHead className="text-gray-200">Tag</TableHead>
            <TableHead className="text-gray-200">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((content, i) => (
            <TableRow key={i} className="cursor-pointer">
              <TableCell className="pl-10">
                <div className="flex space-x-5 items-center">
                  <Image
                    src={content.thumbnail}
                    alt="thumbnail"
                    width={200}
                    height={400}
                  />
                  <p>{content.title}</p>
                </div>
              </TableCell>
              <TableCell>{content.amount}</TableCell>
              <TableCell>{content.date}</TableCell>
              <TableCell>{content.view}</TableCell>
              <TableCell>{content.tag}</TableCell>
              <TableCell>{content.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
