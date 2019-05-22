import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  state = {
    selectedBot: null
  };

  selectBot = bot => {
    if (bot !== this.state.selectedBot) {
      this.setState({ selectedBot: bot });
    }
  };

  deselectBot = () => {
    this.setState({ selectedBot: null });
  };

  render() {
    return (
      <div>
        {this.state.selectedBot ? (
          <BotSpecs
            bot={this.state.selectedBot}
            deselectBot={this.deselectBot}
            handleBot={this.props.handleBot}
          />
        ) : (
          <div className="ui four column grid">
            <div className="row">
              {this.props.bots.map(bot => (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  handleBot={this.props.handleBot}
                  selectBot={this.selectBot}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BotCollection;
