import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewsCategory = () => {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a news Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="grapes">Sports</SelectItem>
            <SelectItem value="pineapple">Travel</SelectItem>
            <SelectItem value="apple">Arts</SelectItem>
            <SelectItem value="banana">Biz</SelectItem>
            <SelectItem value="blueberry">Real Estate</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
};

export default NewsCategory;