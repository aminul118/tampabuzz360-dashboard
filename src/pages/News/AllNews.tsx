/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FilePenLine, FileText, ReceiptText, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader/Loader";
import Title from "@/components/ui/Title";
import { toast } from "react-toastify";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const AllNews = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    isError,
    error,
    data: news = [],
    refetch,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axiosSecure.get("api/v1/news");
      return res.data;
    },
  });

  const handleDeleteConfirm = async () => {
    if (!selectedId) return;

    try {
      await axiosSecure.delete(`api/v1/news/${selectedId}`);
      toast.success("News deleted successfully.");
      refetch();
    } catch (err: any) {
      toast.error("Failed to delete the news. Please try again.");
    } finally {
      setIsDialogOpen(false);
      setSelectedId(null);
    }
  };
  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col gap-6 text-red-600 text-2xl">
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );
  }

  if (news.data.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col gap-6">
        <h1 className="text-red-500 text-4xl font-bold">
          There is no news found
        </h1>
        <FileText className="text-red-600" size={60} />
      </div>
    );
  }

  return (
    <div className="mx-auto container px-4">
      <Title title="All News" />

      {/* ✅ Alert Dialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Are you sure you want to delete this news?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              This action cannot be undone. It will permanently delete this
              news.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ✅ News Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.data.map((singleNews: any, i: number) => {
            const { _id, mainHeading, category, date, contents } = singleNews;
            const imageUrl = contents?.[0]?.image;

            return (
              <TableRow key={_id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={mainHeading}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </TableCell>
                <TableCell>{mainHeading}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button>
                    <ReceiptText />
                  </Button>
                  <Button>
                    <FilePenLine />
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setSelectedId(_id);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllNews;
