import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    yourBots: []
  };

  fetchBots = () => fetch(URL).then(resp => resp.json());

  componentDidMount() {
    this.fetchBots().then(bots => this.setState({ bots }));
  }

  addToYourBots = bot => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({ yourBots: [...this.state.yourBots, bot] });
    }
  };

  removeFromYourBots = bot => {
    if (this.state.yourBots.includes(bot)) {
      let yourBots = this.state.yourBots.filter(b => b !== bot);
      this.setState({ yourBots });
    }
  };

  selectBot = bot => {
    if (bot !== this.state.selectedBot) {
      this.setState({ selectedBot: bot });
    } else if (bot == this.state.selectedBot) {
      this.removeFromYourBots(bot);
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.yourBots}
          handleBot={this.removeFromYourBots}
          selectBot={this.selectBot}
        />
        <BotCollection bots={this.state.bots} handleBot={this.addToYourBots} />
      </div>
    );
  }
}

export default BotsPage;
