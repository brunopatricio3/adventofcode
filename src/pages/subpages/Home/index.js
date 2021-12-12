import '../../../styles/main.scss';
import {days} from "./days.js";

function Home() {
  console.log(days)
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
        {
          days.map((day, i) => 
          <p key={i}>   
            {day.completed === 2 ? (
              <><a className="calendar-days" target="_blank" rel="noreferrer" href={day.link}><span>{day.text}</span></a> <span className="award-gold">**</span></>
            ) :
            day.completed === 1 ? (
              <><a className="calendar-days" target="_blank" rel="noreferrer" href={day.link}><span>{day.text}</span></a> <span className="award-silver">*</span></>
            ) : (
              <span className="text-noncomplete">{day.text}</span>
            )}
          </p>  
          )
        }
      </div>
    </>
  );
}

export default Home;
