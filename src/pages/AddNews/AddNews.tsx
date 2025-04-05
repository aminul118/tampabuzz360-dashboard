import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import AddNewsForm from "./AddNewsForm";

const AddNews = () => {
  return (
    <Container className="container">
      <Title title="Add New News" />
      <AddNewsForm />
    </Container>
  );
};

export default AddNews;
