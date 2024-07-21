import { Employee } from '../../types/types';
import './EmployeeTable.scss'

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatPhone = (phone: string) => {
    return `+${phone.slice(0, 2)}(${phone.slice(2, 4)}) ${phone.slice(
      4,
      8
    )}-${phone.slice(8)}`;
  };

  return (
    <table className='employee-table'>
      <thead className='emplyee-table__head'>
        <tr className='employee-table__row'>
          <th className='employee-table__header'>FOTO</th>
          <th className='employee-table__header'>NOME</th>
          <th className='employee-table__header'>CARGO</th>
          <th className='employee-table__header'>DATA DE ADMISSÃO</th>
          <th className='employee-table__header'>TELEFONE</th>
        </tr>
      </thead>
      <tbody className='employee-table__body'>
        {employees.map((employee) => (
          <tr className='employee-table__row'>
            <td className='employee-table__cell'>
              <img
                className='employee-table__image'
                src={employee.image}
                alt={employee.name}
                width='50'
              />
            </td>
            <td className='employee-table__cell'>{employee.name}</td>
            <td className='employee-table__cell'>{employee.job}</td>
            <td className='employee-table__cell'>
              {formatDate(employee.admission_date)}
            </td>
            <td className='employee-table__cell'>
              {formatPhone(employee.phone)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
