import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus } from "lucide-react";

type SubContent = {
  image: File | null;
  title: string;
  description: string;
};

type NewsFormInputs = {
  mainHeading: string;
  author: string;
  category: string;
  contents: SubContent[];
};

const AddNewsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<NewsFormInputs>({
    defaultValues: {
      contents: [{ image: null, title: "", description: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contents",
  });

  const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY;
  console.log(imgbbKey);

  const uploadToImgBB = async (images: File[]): Promise<string[]> => {
    const urls: string[] = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.success) {
        urls.push(data.data.url);
      }
    }

    return urls;
  };

  const onSubmit = async (data: NewsFormInputs) => {
    const imageFiles = data.contents
      .map((c) => c.image)
      .filter(Boolean) as File[];
    const imageUrls = await uploadToImgBB(imageFiles);

    const finalContents = data.contents.map((item, idx) => ({
      image: imageUrls[idx],
      title: item.title,
      description: item.description,
    }));

    const finalPayload = {
      mainHeading: data.mainHeading,
      author: data.author,
      category: data.category,
      contents: finalContents,
    };

    console.log("Final Submitted Data:", finalPayload);
    // send to backend if needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Main Heading */}
      <div>
        <Label>Main Heading</Label>
        <Input
          {...register("mainHeading", { required: "Main heading is required" })}
          placeholder="Write Your News Heading"
        />
        {errors.mainHeading && (
          <p className="text-red-500">{errors.mainHeading.message}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* Author */}
        <div>
          <Label>Author</Label>
          <Input
            {...register("author", { required: "Author is required" })}
            placeholder="Write Author Name"
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>

        <div>
          {/* News Category */}
          <Label>News Category</Label>
          <Select onValueChange={(value) => setValue("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="politics">Politics</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
      </div>

      {/* Dynamic Content Section */}
      {fields.map((field, index) => (
        <div key={field.id} className=" p-4 rounded-md space-y-4 bg-blue-50">
          <h4 className="font-bold text-center text-2xl py-4">
            Information for section {index + 1}
          </h4>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label>Image</Label>
              <Controller
                control={control}
                name={`contents.${index}.image`}
                render={({ field: { onChange } }) => (
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      onChange(file);
                    }}
                  />
                )}
              />
            </div>

            <div>
              <Label>Title</Label>
              <Input
                {...register(`contents.${index}.title`, {
                  required: "Title is required",
                })}
                placeholder="Enter section title"
              />
              {errors.contents?.[index]?.title && (
                <p className="text-red-500">
                  {errors.contents[index].title?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              {...register(`contents.${index}.description`, {
                required: "Description is required",
              })}
              placeholder="Enter description"
              className="h-28"
            />
            {errors.contents?.[index]?.description && (
              <p className="text-red-500">
                {errors.contents[index].description?.message}
              </p>
            )}
          </div>

          {/* ✅ Only allow removing if more than 1 section */}
          {fields.length > 1 && (
            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              <Minus /> Remove Section
            </Button>
          )}
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ image: null, title: "", description: "" })}
      >
        + Add More Section
      </Button>

      <Button type="submit" className="ml-4">
        Submit News
      </Button>
    </form>
  );
};

export default AddNewsForm;
