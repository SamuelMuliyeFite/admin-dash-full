import Breadcrumb from '../components/Breadcrumb.js';
import ChartOne from '../components/ChartOne.js';
import ChartThree from '../components/ChartThree.js';
import ChartTwo from '../components/ChartTwo.js';
import DefaultLayout from '../layout/DefaultLayout';

const Chart = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
        
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DefaultLayout>
  );
};

export default Chart;
