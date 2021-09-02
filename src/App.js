import dante_pizza from './img/20210803_175827.jpg';
import linux_distribution_timeline from './img/GNU_Linux Distributions Timeline.svg';
import un_rape from './img/Rape_rate_per_100,000_-_country_comparison_-_United_Nations_2012.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span style={{ color: "#007A33" }}>Dante</span> Victor <span style={{ color: "#CB333B" }}>Barbieri</span>
        </h1>
        <img src={dante_pizza} className="App-logo" alt="logo" />
        <p>I'm taking this class because I want to better understand how to effectively communicate data. My father worked in SQL for much of his career, and learning how to effectively visualize important data was a valuable skill that he acquired. I hope to also learn this skill in CSCE 447 Data Visualization.</p>
      </header>
      <body className="App-body">
        <div className="Helpful-viz">
          <h1>Linux Distribution Timeline</h1>
          <div className="Visualization">
            <a href="https://en.wikipedia.org/wiki/File:Gldt.svg">
              <img src={linux_distribution_timeline} className="Visualization" alt="linux distribution timeline" />
            </a>
            <p className="Attribution">Source: <a className="App-link" href="https://en.wikipedia.org/wiki/File:Gldt.svg">File:Linux Distribution Timeline.svg (Wikipedia)</a></p>
          </div>
          <p>This visualization is able to accurately demonstrate the conception and continuance of a multitude of Linux distributions while also illustrating the relationship between different distributions. It does a great job at illustrating which distributions are "major" such as Debian, Arch, Slackware, and Red-Hat. It is also phenomenal for getting across the scale of the number of existing Linux distributions. In general, it can be difficult to visualize large ammounts of data that cannot aggregate. To showcase the creation times and evolutions of so many distributions will require a large amount of space, and the chart was designed as an SVG so that it can be significantly scaled up and zoomed in to further its utility. While it doesn't quite have every distribution, it manages to effectively showcase a significant number of them. In my view, it gets bonus points for including our very own TAMU Linux (in the independent section near the bottom).</p>
        </div>
        <div className="Unhelpful-viz">
          <h1>Rape rate per 100,000 - country comparison - United Nations 2012</h1>
          <div className="Visualization">
            <a href="https://commons.wikimedia.org/wiki/File:Rape_rate_per_100,000_-_country_comparison_-_United_Nations_2012.png">
              <img src={un_rape} className="Visualization" alt="linux distribution timeline" />
            </a>
            <p className="Attribution">Source: <a className="App-link" href="https://commons.wikimedia.org/wiki/File:Rape_rate_per_100,000_-_country_comparison_-_United_Nations_2012.png">File:Rape rate per 100,000 - country comparison - United Nations 2012.png (Wikipedia)</a></p>
          </div>
          <p>This visualization is flawed for aesthetic and misleading reasons. Starting with the aesthetic reasons, the vertical axis is labeled in the title of the graph as opposed to on the axis, as it should be. Another visual problem is that the columns have values present, but these values are very difficult to read for all countries depicted at or left of Finland. These column labels should have been omitted for the larger values or placed above the columns that they represented. Now as for the misleading aspects of this graph. Comparing rape statistics between countries is notoriously difficult due to the varied definitions of what constitutes the crime of &quot;rape&quot;. Sweden appears on the graph to be a place where rape is extraordinarily common with more than one in two-hundred people being raped in 2012. This discrepancy is explainable but is masked by the graph. Sweden has a broad definition of rape, they also count repeated rape as a series of separate rape charges as opposed to one rape charge. Finally, the Swedish government has been working on initiatives to reduce the number of unreported rapes and this impetus to speak up may also have contributed to a higher number of reported rapes. For further reading, I'd suggest the Wikipedia article <a className="App-link" href="https://en.wikipedia.org/wiki/Rape_in_Sweden#International_comparison">Rape in Sweden</a>. As a result, this chart suffers from poor aesthetics and misleading depictions.</p>
        </div>
      </body>
    </div>
  );
}

export default App;
