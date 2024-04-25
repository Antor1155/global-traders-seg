const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-5">
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <p className="text-center fs-1">Loading ...</p>
    </>
  );
};

export default Loading;
