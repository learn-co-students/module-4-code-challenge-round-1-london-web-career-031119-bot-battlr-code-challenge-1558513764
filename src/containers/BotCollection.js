import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} handleBot={this.props.handleBot} />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
