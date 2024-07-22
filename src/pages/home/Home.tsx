import { useEffect, useState } from 'react';
import './Home.scss';
import { getEmployees } from '../../api/api';
import { Employee } from '../../types/types';
import SearchInput from '../../components/SearchInput /SearchInput';
import Table from '../../components/Table/table';

const Home = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchData();
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.job.toLowerCase().includes(search.toLowerCase()) ||
      employee.phone.includes(search)
  );

  return (
    <div className='home'>
      <div className='home__header'>
        <h1 className='home__header--title'>Funcionários</h1>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='home__table'>
        <Table employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default Home;
