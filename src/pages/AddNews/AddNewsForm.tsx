import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"; // If you have a custom Textarea component
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import NewsCategory from "./NewsCategory";

type Inputs = {
  heading: string;
  description: string;
};

const AddNewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Heading */}
      <div>
        <Label>Heading </Label>
        <Input
          id="heading"
          placeholder="Enter news headline"
          {...register("heading", { required: "Heading is required" })}
        />
        {errors.heading && (
          <span className="text-red-500 text-sm">{errors.heading.message}</span>
        )}
      </div>
      {/* News Category */}
      <div>
        <Label>News Category</Label>
        <NewsCategory />
      </div>
      {/* Description */}
      <div>
        <Label>Description</Label>
        <Textarea
          id="description"
          placeholder="Enter news details"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      <Button type="submit">Add News</Button>
    </form>
  );
};

export default AddNewsForm;
