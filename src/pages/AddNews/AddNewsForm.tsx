import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Inputs = {
  heading: string;
  description: string;
  category: string;
  author: string;
};

const AddNewsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
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

      {/* Author */}
      <div>
        <Label>Author Name</Label>
        <Input
          id="heading"
          placeholder="Enter news Writer name"
          {...register("author", { required: "Heading is required" })}
        />
        {errors.author && (
          <span className="text-red-500 text-sm">{errors.author.message}</span>
        )}
      </div>

      {/* News Category */}
      <div>
        <Label>News Category</Label>
        <Select onValueChange={(value) => setValue("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a news category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="arts">Arts</SelectItem>
              <SelectItem value="biz">Biz</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.category && (
          <span className="text-red-500 text-sm">
            {errors.category.message}
          </span>
        )}
      </div>

      {/* Register category manually for validation */}
      <input
        type="hidden"
        {...register("category", { required: "Category is required" })}
      />

      {/* Description */}
      <div>
        <Label>News Description</Label>
        <Textarea
          id="description"
          placeholder="Enter news details"
          className="h-30"
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
