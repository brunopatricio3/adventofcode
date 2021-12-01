import '../styles/main.scss';

function Application() {
  return (
    <div className="appWrapper">
      <div className="mainWrapper">
        <h1>Advent of Code - 2021 Challenge</h1>
        <div className="nav margin-bottom-m">
          <a href="https://adventofcode.com/" className="nav-item">[Visit Advent of Code]</a>
        </div>
        <div>
          <p>
            This website was inspired by the original <a>Advent of code</a> by Eric Wastl. The main purpose for it is to index the various challenges I solved "regarding" the 2021 Advent of Code.  
          </p>
          <p>
            The reason the website was structured similar to Eric's Advent of Code, was to maintain the consistency, aspect and spirit of the original and it's in no way an attempt to steal his amazing work done over the years.  
          </p>
          <p>
            Below you can find this year's calendar and respective solutions in Javascript:  
          </p>
        </div>
        <div className="calendar">
          <h2>Calendar</h2>
          <p>
            <span><a target="_blank" href="https://github.com/brunopatricio3/adventofcode/blob/main/2021/1/index.js">Day 1) Sonar Sweep</a></span> <span className="award-gold">**</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Application;
