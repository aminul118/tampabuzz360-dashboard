type ITitle = {
  title: string;
  description?: string;
};

const Title = ({ title, description }: ITitle) => {
  return (
    <div className="text-center pb-6">
      <h1 className="text-3xl 2xl:text-5xl font-bold ">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
