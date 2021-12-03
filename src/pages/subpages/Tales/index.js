import '../../../styles/main.scss';
import { BarChart } from '../../../components/Charts/BarChart';

function Tales() {
  return (
    <>
      <div className = "section-Tales">
        <div className="chart-wrapper">
          <div className="chart-division">
            <BarChart/>
          </div>
          <div className="info-division">
            <p><b>Day 1 - Sonar Sweep </b></p>
            <p>Ahoy captain and welcome aboard Santa's submarine! </p>
            <p>The search for the sleigh keys has started! During the search, the submarine used it's sonar, in order to detect and find the sleigh keys at specific depths. During this procedure, Santa's submarine increased it's depth <span className="text-highlight-yellow">1466 times</span>, reaching a depth of <span className="text-highlight-white">5770 meters</span>.</p>
            <p>Our last reports claimed, that looking for the sleigh keys in specific depths, was not returning useful information, so we decided to take the <span className="text-highlight-white">three-measurement sliding window</span> approach, and were able to verify that this method was more efficient, giving a total of <span className="text-highlight-yellow">1491 sum increases</span> during the search.</p>
            <p>Unfortunately, we were not able to find the keys, but don't worry, <span className="text-highlight-white">this is far from over</span>! Tomorrow we'll resume the search, since there's only 24 days left until <span className="text-highlight-white">Christmas</span>! </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tales;