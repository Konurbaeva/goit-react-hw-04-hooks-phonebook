function Filter({ filter, handleSearch }) {
    return (
        <input
            value={filter}
            onChange={handleSearch}
            placeholder="Search ..."
            type="text"
            name="search"
        />
        // {filter}
    );
}

export default Filter;