import Breadcrumb from '../../components/Breadcrumb.js';
import DefaultLayout from '../../layout/DefaultLayout';
import TableOne from '../../components/TableOne.js';
import TableTwo from '../../components/TableTwo.js';
import TableThree from '../../components/TableThree.js';
import DropdownNotification from '../../components/DropdownNotification.js'

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Approved" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableThree />
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
