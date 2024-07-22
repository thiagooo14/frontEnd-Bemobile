import { useEffect, useState } from 'react';
import { Employee } from '../../types/types';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import EmployeeAcordion from '../../components/EmployeeAcordion/EmployeeAcordion';

interface TableProps {
  employees: Employee[];
}

const Table = ({ employees }: TableProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <EmployeeAcordion employees={employees} />
  ) : (
    <EmployeeTable employees={employees} />
  );
};

export default Table;
