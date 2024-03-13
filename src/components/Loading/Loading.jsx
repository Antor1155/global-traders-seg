

const Loading = () => {
    return (
        <>
        <div className="d-flex justify-content-between my-5">
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
        <p className="text-center fs-1">Loading ...</p>
        </>
    );
};

export default Loading;