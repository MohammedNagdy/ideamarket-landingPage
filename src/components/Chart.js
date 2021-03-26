import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  color = "#2F80ED";

  getData() {
    const prices = this.props.data.sort();
    let data = [];
    for (var i = 0; i < prices.length; i++) {
      let dPoint = { x: i + 1, y: prices[i], label: this.props.labelData[i] };
      data.push(dPoint);
    }

    return data;
  }

  render() {
    return (
      <div className="chart" >
        <VictoryChart width={1000} domainPadding={{ x: 20 }} animate={{ duration: 500 }}>
          <VictoryBar
            horizontal
            data={this.state.data}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: "labels",
                        mutation: props => {
                          return props.comp === <h2>Hii</h2>
                            ? null
                            : { text: "clicked" };
                        }
                      }
                    ];
                  }
                }
              }
            ]}
            style={{
              data: { fill: this.color, width: 32 }
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: this.color,
                  label: ""
                })
              }
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              opacity: "0%"
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
