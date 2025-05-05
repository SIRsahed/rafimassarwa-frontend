"use client";
import PathTracker from "../_components/PathTracker";

import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  author: string;
  views: number;
  date: string;
}

const Page = () => {
  // Mock data for the table
  const [posts] = useState<Post[]>(
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      title: "How to Grow Your Stock Market Idea Free",
      author: "Admin",
      views: 2450,
      date: "Jan 6, 2025",
    }))
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <PathTracker />

        <Link
        href={'/dashboard/news/add-news'}
        >
          <button className="bg-[#28a745] py-2 px-5 rounded-lg text-white font-semibold">
            + Add News
          </button>
        </Link>
      </div>

      <div>
        <div className="rounded-lg overflow-hidden border border-[#b0b0b0]">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#b0b0b0]">
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Author</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Views</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map((post) => (
                <TableRow key={post.id} className="border-b border-[#b0b0b0]">
                  <TableCell className="border-none">{post.title}</TableCell>
                  <TableCell className="border-none">{post.author}</TableCell>
                  <TableCell className="text-center border-none">
                    {post.date}
                  </TableCell>
                  <TableCell className="border-none">{post.views}</TableCell>
                  <TableCell>
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            Showing {indexOfFirstPost + 1}-
            {Math.min(indexOfLastPost, posts.length)} from {posts.length}
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <Button
                  key={i}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="icon"
                  className={`h-8 w-8 ${
                    currentPage === pageNumber ? "bg-green-500" : ""
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              );
            })}

            {totalPages > 5 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled
                >
                  ...
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </Button>
              </>
            )}

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
