import Breadcrumb from '../../components/Breadcrumb.js';
import DefaultLayout from '../../layout/DefaultLayout';
import TableOne from '../../components/TableOne.js';
import TableTwo from '../../components/TableTwo.js';
import TableThree from '../../components/TableThree.js';

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Approved" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
