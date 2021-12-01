import './styles/main.scss';

function Application() {
  return (
    <div className="appWrapper">
      <div className="mainWrapper">
        <h1>Advent of Code - 2021 Challenge</h1>
        <div className="nav margin-bottom-m">
          <a href="https://adventofcode.com/" className="nav-item">[Visit Advent of Code]</a>
        </div>
        <div className="calendar">
          <span>Day 1) Sonar Sweep</span> <span className="award-gold">**</span>
        </div>
      </div>
    </div>
  );
}

export default Application;
