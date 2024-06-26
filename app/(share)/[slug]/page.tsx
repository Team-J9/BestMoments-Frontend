const page = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug} page</div>;
};

export default page;
