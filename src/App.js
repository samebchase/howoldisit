import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Icon from './icon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      sortBy: "tech",
      orderDesc: false,
      technologies
    };

    this.filterInput = React.createRef();

    this.filterChanged = this.filterChanged.bind(this);
    this.rowStyle = this.rowStyle.bind(this);
  }

  componentDidMount() {
    const filter = decodeURI(window.location.hash.slice(1)); //remove the # symbol
    this.filterInput.current.value = filter;
    this.setState({
      filter
    });
  }

  filterChanged(event) {
    window.location.hash = event.target.value;
    this.setState({
      filter: event.target.value
    })
  }

  rowStyle(rowHidden) {
    let style = {};

    if (rowHidden) {
      style.display = "none";
    }

    return style;
  }

  yearsSince(date) {
    return Math.floor((new Date() - new Date(date)) / (365 * 60 * 24 * 1000 * 60));
  }

  handleSort = (e) => {
    let sortBy = this.state.sortBy;
    let newSort = e.target.innerText.toLowerCase();
    let orderDesc = this.state.orderDesc;

    this.setState({
      orderDesc: sortBy === newSort ? !orderDesc : false,
      sortBy: newSort
    }, () => this.orderTechnologies());
  }

  orderTechnologies(){
    let techList = JSON.parse(JSON.stringify(this.state.technologies));
    let orderDesc = this.state.orderDesc;

    if(this.state.sortBy === 'tech'){
      techList.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if (aName > bName) return orderDesc ? -1 : 1;
        if (aName < bName) return orderDesc ? 1 : -1;
        return 0;
      });
    }else{
      techList.sort((a, b) => {
        let aRel = a.released;
        let bRel = b.released;
        if (aRel > bRel) return orderDesc ? 1 : -1;
        if (aRel < bRel) return orderDesc ? -1 : 1;
        return 0;
      });
    }

    this.setState({
      technologies: techList
    });
  }

  render() {
    let rows = [];
    let options = [];
    let atLeastOneRowShown = false;
    for (const tech of this.state.technologies) {
      let years = this.yearsSince(tech.released);
      const rowHidden = tech.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) === -1;
      if(!rowHidden) {
        atLeastOneRowShown = true;
      }
      rows.push(
        <p key={tech.name} style={this.rowStyle(rowHidden)}>
          <a target={tech.link ? "_blank": ""} rel='noopener noreferrer' href={tech.link || '#'}>
            <Icon icon={tech.icon} />
            <strong>{tech.name}</strong>
          </a> has been out for <strong>{years < 1 ? 'less than a' : years} year{years > 1 ? 's' : ''}</strong>
        </p>
      );

      options.push(
        <option key={tech.name} value={tech.name} />
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>How long has <input id="tech-dropdown" type="search" list="technologies" placeholder="react, vue, ember, etc." onChange={this.filterChanged} ref={this.filterInput} /> existed?
            <datalist id="technologies">
              {options}
            </datalist></h1>
        </header>

        <main>
          <p>This is a handy tool for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months.</p>

          <div className="inline">
            <p className="inline">Order by </p>
            <div className={this.state.sortBy === "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Tech
            </div>
            {this.state.sortBy === "tech" && <div className={this.state.orderDesc ? "arrow arrow-down" : "arrow arrow-up"} />}
            <p className="inline">, </p>
            <div className={this.state.sortBy !== "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Age
            </div>
            {this.state.sortBy !== "tech" && <div className={this.state.orderDesc ? "arrow arrow-down" : "arrow arrow-up"} />}
          </div>

          {rows}

          {!atLeastOneRowShown && <p>No technology found by name <strong>{this.state.filter}</strong>.</p>}

          <div id="footer">
            <p>Missing a technology? Find this repo on <a href="https://github.com/jsrn/howoldisit">GitHub</a>. Want a piece of me? Hurl abuse on <a href="https://twitter.com/zerosumjames">Twitter</a>.
            </p>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
