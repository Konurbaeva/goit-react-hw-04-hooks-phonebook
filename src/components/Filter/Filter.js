function Filter({ filter, handleSearch }) {
    return (
        <div>
            <input
                value={filter}
                onChange={handleSearch}
                placeholder="Search ..."
                type="text"
                name="search"
            />
            {filter}
        </div>
    );
}

export default Filter;