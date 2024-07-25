interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center justify-evenly mt-8">
      {pageNumbers.map((number) => (
        <span key={number} className="" onClick={() => paginate(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
