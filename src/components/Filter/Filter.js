import PropTypes from 'prop-types';

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


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default Filter;