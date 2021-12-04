import '../../../styles/main.scss';
import { BarChart } from '../../../components/Charts/BarChart';
import { LineChart } from '../../../components/Charts/LineChart';

function Tales() {
  return (
    <>
      <div className = "section-Tales">
        <div className="chart-wrapper">
          <div className="chart-division">
            <BarChart/>
          </div>
          <div className="info-division">
            <p><b><a target="_blank" href="https://adventofcode.com/2021/day/1" className="link">[Day 1 - Sonar Sweep]</a> </b></p>
            <p>Ahoy captain and welcome aboard Santa's submarine! </p>
            <p>The search for the sleigh keys has started! During the search, the submarine used it's sonar, in order to detect how quickly the depth increases, for a better understanding of the depths to look for the sleigh keys. During this procedure, the submarine's verified that there were <span className="text-highlight-yellow">1466 measurements </span> that were larger than the previous measurement, reaching a depth of <span className="text-highlight-white">5770 meters</span>.</p>
            <p>Our last reports claimed, that looking this method was not returning useful information, so it was decided to take the <span className="text-highlight-white">three-measurement sliding window</span> approach, and were able to verify that this method was more efficient, giving a total of <span className="text-highlight-yellow">1491 sum increases</span> during the analysis.</p>
            <p>Now with this measurements, <span className="text-highlight-white">we are finally able to start searching</span> the big blue for the sleigh keys! </p>
          </div>
        </div>
        <div className="chart-wrapper">
          
          <div className="info-division">
            <p><b><a target="_blank" href="https://adventofcode.com/2021/day/2" className="link">[Day 2 - Dive!]</a> </b></p>
            <p>Ready to start piloting Santa's submarine?</p>
            <p>The commands are pretty forward, we can move <span className="text-highlight-white">vertically</span> (increasing or decreasing the submarine depth), or <span className="text-highlight-white">horizontally</span>, moving further from the coast.</p>
            <p>After getting an understanding on how quickly the depth increases, the elves planned a course. Before the real expedition, it was decided to go on a test run using an <span className="text-highlight-white">horizontal position</span> of <span className="text-highlight-yellow">1845</span> and a <span className="text-highlight-white">depth</span> of <span className="text-highlight-yellow">916</span>.</p>
            <p>After the test drive, the elves noticed that the path wasn't make sense, after careful inspection of the manual you get an understanding that you actually need to take <span className="text-highlight-white">aim</span> into consideration, returning the correct <span className="text-highlight-white">final horizontal position</span> of <span className="text-highlight-yellow">1845</span> and a <span className="text-highlight-white">final depth</span> of <span className="text-highlight-yellow">763408</span>.</p>
            <p>The expedition just begun, and the submarine is away to look for the sleigh keys! <span className="text-highlight-white">What kind of challenges</span> will the depths of the ocean have in store for our little submarine? </p>
          </div>
          <div className="chart-division">
            <LineChart/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tales;