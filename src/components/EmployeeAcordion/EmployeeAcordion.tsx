import React, { useState } from 'react';
import { Employee } from '../../types/types';
import Dot from '../../assets/dot';
import { formatDate, formatPhone } from '../../util/formats';
import './EmployeeAcordion.scss';

interface EmployeeAcordionProps {
  employees: Employee[];
}

const EmployeeAcordion = ({ employees }: EmployeeAcordionProps) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <table className='employee-acordion'>
      <thead className='employee-acordion__head'>
        <tr className='employee-acordion__row'>
          <th className='employee-acordion__header'>FOTO</th>
          <th className='employee-acordion__header'>NOME</th>
          <th className='employee-acordion__header'>
            <Dot />
          </th>
        </tr>
      </thead>
      <tbody className='employee-acordion__body'>
        {employees.map((employee) => (
          <React.Fragment key={employee.id}>
            <tr
              className='employee-acordion__row'
              onClick={() => handleRowClick(employee.id)}
            >
              <td className='employee-acordion__cell'>
                <img
                  className='employee-acordion__image'
                  src={employee.image}
                  alt={employee.name}
                  width='50'
                />
              </td>
              <td className='employee-acordion__cell'>{employee.name}</td>
              <td className='employee-acordion__cell'>
                {expandedRows.includes(employee.id) ? '▲' : '▼'}
              </td>
            </tr>
            {expandedRows.includes(employee.id) && (
              <td className='employee-acordion__cell' colSpan={3}>
                <table>
                  <tr className='employee-acordion__row--expanded'>
                    <td className='employee-acordion__cell--expanded'>
                      Cargo
                    </td>
                    <td className='employee-acordion__cell--expanded'>
                      {employee.job}
                    </td>
                  </tr>
                  <tr className='employee-acordion__row--expanded'>
                    <td className='employee-acordion__cell--expanded'>
                      Data de Admissão
                    </td>
                    <td className='employee-acordion__cell--expanded'>
                      {formatDate(employee.admission_date)}
                    </td>
                  </tr>
                  <tr className='employee-acordion__row--expanded'>
                    <td className='employee-acordion__cell--expanded'>
                      Telefone
                    </td>
                    <td className='employee-acordion__cell--expanded'>
                      {formatPhone(employee.phone)}
                    </td>
                  </tr>
                </table>
              </td>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeAcordion;
