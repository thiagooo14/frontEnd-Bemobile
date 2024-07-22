// import { SearchIcon } from '../../assets/search';
import SearchIcon from '../../assets/search-icon';
import './SearchInput .scss';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className='search'>
      <SearchIcon className='search-icon' />
      <input
        className='search-input'
        type='text'
        placeholder='Pesquisar'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
