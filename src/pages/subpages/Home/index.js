import '../../../styles/main.scss';

function Home() {
  return (
    <>
      <div className="section-home">
        <p>
          This website was inspired by the original <a target="_blank" rel="noreferrer" href="https://adventofcode.com/" className="link">Advent of code</a> website, created by  <a target="_blank" rel="noreferrer" href="https://adventofcode.com/2021/about" className="link">Eric Wastl</a>. It's main purpose is to index the solutions for the various challenges of the 2021 Advent of Code's calendar.  
        </p>
        <p>
          The reason this website was structured and stylized similar to Eric's Advent of Code webiste, was to maintain the consistency, aspect and spirit of the original and, it is, in no way, an attempt to steal his <span className="text-highlight-white">incredible work</span> done over the past years.  
        </p>
        <p>
          Below, you can find this year's calendar and respective solutions in Javascript:  
        </p>
      </div>
      <div className="calendar">
        <h2>Calendar</h2>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/1/index.js"><span>Day 1) Sonar Sweep</span> <span className="award-gold">**</span></a>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/2/index.js"><span>Day 2) Dive!</span> <span className="award-gold">**</span></a>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/3/index.js"><span>Day 3) Binary Diagnostic</span> <span className="award-gold">**</span></a>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/4/index.js"><span>Day 4) Giant Squid</span> <span className="award-gold">**</span></a>
        </p>
        <p>
         <span className="text-noncomplete">Day 5) Hydrothermal Venture</span>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/6/index.js"><span>Day 6) Lanternfish</span> <span className="award-gold">**</span></a>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/7/index.js"><span>Day 7) The Treachery of Whales</span> <span className="award-gold">**</span></a>
        </p>
        <p>
          <a className="calendar-days" target="_blank" rel="noreferrer" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/8/index.js"><span>Day 8) Seven Segment Search</span> <span className="award-silver">*</span></a>
        </p>
        <p>
        <span className="text-noncomplete">Day 9) Smoke Basin</span>
        </p>
        <p>
        <span className="text-noncomplete">Day 10) Syntax Scoring</span> 
        </p>
        <p>
        <span className="text-noncomplete">Day 11) Dumbo Octopus</span>
        </p>
      </div>
    </>
  );
}

export default Home;
