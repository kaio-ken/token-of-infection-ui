import React, { Component } from "react";
import TeamScore from "./components/TeamScore.js";
import TugOfWar from "./components/TugOfWar.js";
import MessageBoard from "./components/MessageBoard.js";
import "./App.scss";

class App extends Component {
  state = {
    team: "zombie",
    humans: {
      count: 789
    },
    zombies: {
      count: 1024
    }
  };

  componentDidMount() {
    // get data and set state
  }

  render() {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <h2
            className={
              this.state.team === "human" ? "humanColor" : "zombieColor"
            }
            style={{
              fontWeight: 400,
              marginTop: "66px",
              marginBottom: "56px",
              textAlign: "center"
            }}
          >
            You are a {this.state.team}
          </h2>
          <div className="scoreboard">
            <div className="scoreboard-inner">
              <div>
                <TeamScore
                  name="humans"
                  count={this.state.humans.count}
                  total={this.state.zombies.count + this.state.humans.count}
                />
              </div>
              <div>
                <TeamScore
                  name="zombies"
                  count={this.state.zombies.count}
                  total={this.state.zombies.count + this.state.humans.count}
                />
              </div>
            </div>
          </div>
          <TugOfWar
            zombies={this.state.zombies.count}
            humans={this.state.humans.count}
          />
        </div>
        <div
          style={{
            height: "100%",
            maxWidth: "360px",
            paddingLeft: "32px",
            paddingRight: "32px",
            borderLeft: "solid 1px rgba(255,255,255,0.2)",
            overflowY: "scroll"
          }}
        >
          <MessageBoard />
        </div>
      </div>
    );
  }
}

export default App;
