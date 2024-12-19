const LoadMoreBtn = ({ loadMore, className = '' }) => {
  return (
    <button type='button' onClick={loadMore} className={`${className}`}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
