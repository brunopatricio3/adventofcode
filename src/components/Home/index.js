import '../../styles/main.scss';

function Home() {
  return (
    <>
      <div>
        <p>
          This website was inspired by the original <a target="_blank" href="https://adventofcode.com/" className="link">Advent of code</a> website, created by  <a target="_blank" href="https://adventofcode.com/2021/about" className="link">Eric Wastl</a>. It's main purpose is to index the various solutions for the various challenges of the 2021 Advent of Code's calendar.  
        </p>
        <p>
          The reason this website was structured and stylized similar to Eric's Advent of Code webiste, was to maintain the consistency, aspect and spirit of the original and, it is, in no way, an attempt to steal his <span className="text-highlight">incredible work</span> done over the past years.  
        </p>
        <p>
          Below, you can find this year's calendar and respective solutions in Javascript:  
        </p>
      </div>
      <div className="calendar">
        <h2>Calendar</h2>
        <p>
          <span><a target="_blank" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/1/index.js">Day 1) Sonar Sweep</a></span> <span className="award-gold">**</span>
        </p>
      </div>
    </>
  );
}

export default Home;