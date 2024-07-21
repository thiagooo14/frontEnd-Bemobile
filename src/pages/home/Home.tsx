import { useEffect, useState } from 'react';
import './Home.scss';
import { getEmployees } from '../../api/api';
import { Employee } from '../../types/types';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

const Home = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchData();
  }, []);

  console.log(employees);

  return (
    <div className='home'>
      <div className='home__header'>
        <h1 className='home__header--title'>Funcionários</h1>
        <input
          className='home__header--search'
          type='text'
          placeholder='Pesquisar'
        />
      </div>
      <div className='home__table'>
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};

export default Home;
