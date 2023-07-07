import React, { useEffect } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Edit, Sort } from '@syncfusion/ej2-react-grids';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Header } from '../components';
import { userGrid } from '../data/users';
import Layout from '../components/Layout';
import { useUserContext } from '../contexts/UserProvider';
import Loading from '../components/Loading';

const Employees = () => {
  const toolbarOptions = [];
  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };
  const { getDataUsers, users, isLoading } = useUserContext();
  console.log('🚀 ~ file: Employees.jsx:16 ~ Employees ~ isLoading:', isLoading);
  // delete action
  const actionBegin = (args) => {
    if (args.requestType === 'delete') { // triggers while deleting the record
      console.log('actionBegin delete triggers');
      console.log(args.data);
    }
    if (args.requestType === 'save') { // triggers while adding the record
      console.log('actionBegin triggers');
      console.log(args.data);
    }
  };

  const actionComplete = (args) => {
    if (args.requestType === 'save') { // triggers when the record was added
      console.log('actionComplete triggers');
      console.log(args.data);
    }
    if (args.requestType === 'delete') { // triggers when the record was deleted
      console.log('actionComplete triggers');
      console.log(args.data);
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);
  return (
    <Layout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Users" />
        <GridComponent
          dataSource={users}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5, pageSize: 8 }}
          editSettings={editing}
          toolbar={toolbarOptions}
          actionBegin={actionBegin}
          actionComplete={actionComplete}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {userGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          {/* <Inject services={[Search, Toolbar]} /> */}

        </GridComponent>
      </div>
      {isLoading && <Loading isLoading={isLoading} />}
    </Layout>
  );
};
export default Employees;
