import PropTypes from 'prop-types';
import styled from 'styled-components';

function Filter({ filter, handleSearch }) {
    return (
        <div>
            <Input
                value={filter}
                onChange={handleSearch}
                placeholder="Search ..."
                type="text"
                name="search"
            />
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
};


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: pink;
  border: none;
  border-radius: 3px;
`;

export default Filter;