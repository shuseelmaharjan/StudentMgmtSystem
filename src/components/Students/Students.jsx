import React from 'react';
import useAuth from '../../useAuth';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { useSidebar } from '../Sidebar/SidebarContext';
import { useTable, usePagination } from 'react-table';
import Breadcrumb from '../BreadCrumb/Breadcrumb';

const Students = () => {
  useAuth();
  const { isSidebarOpen } = useSidebar();

  const data = React.useMemo(
    () => [
      { col1: 'Student 1', col2: 'student1@example.com', col3: 'A', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
      { col1: 'Student 2', col2: 'student2@example.com', col3: 'B', col4: 'Action' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: () => <div className="text-center">S.N.</div>,
        accessor: (row, i) => i + 1,
        id: 'serial', // Adding id for this column
        Cell: ({ value }) => <div className="text-center">{value}</div>,
      },
      {
        Header: () => <div className="text-left">Name</div>,
        accessor: 'col1',
        Cell: ({ value }) => <div className="text-left">{value}</div>,
      },
      {
        Header: () => <div className="text-left">Email</div>,
        accessor: 'col2',
        Cell: ({ value }) => <div className="text-left">{value}</div>,
      },
      {
        Header: () => <div className="text-center">Grade</div>,
        accessor: 'col3',
        Cell: ({ value }) => <div className="text-center">{value}</div>,
      },
      {
        Header: () => <div className="text-center">Action</div>,
        accessor: 'col4',
        Cell: ({ value }) => <div className="text-center">{value}</div>,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  return (
    <div className={`flex ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-4">
          <Breadcrumb paths={['Dashboard', 'Students']} />
          <h3 className="text-xl font-bold mb-4">Students</h3>
          <div className="overflow-x-auto">
            <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="px-4 py-2 border-b border-gray-300">
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-100">
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-300">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <select
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              >
                {[5, 10, 20, 30, 40, 50].map(size => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="border border-gray-300 rounded px-2 py-1 mx-1">
                {'<<'}
              </button>
              <button onClick={() => previousPage()} disabled={!canPreviousPage} className="border border-gray-300 rounded px-2 py-1 mx-1">
                {'<'}
              </button>
              <span className="mx-2">
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage} className="border border-gray-300 rounded px-2 py-1 mx-1">
                {'>'}
              </button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="border border-gray-300 rounded px-2 py-1 mx-1">
                {'>>'}
              </button>
              <span className="ml-2">
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: '50px' }}
                  className="border border-gray-300 rounded px-2 py-1 mx-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
