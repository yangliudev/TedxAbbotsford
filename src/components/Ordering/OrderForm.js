import React, { Component } from 'react';
import Ordering1 from "./Ordering_1";
import Ordering2 from "./Ordering_2";
import Ordering3 from "./Ordering_3";
import Ordering4 from "./Ordering_4";


class OrderForm extends Component {
    constructor() {
        super();
        this.state = {
          name: "Ordering",
          ordering1: true,
          ordering2: true,
          ordering3: false
        };
        this.hideComponent = this.hideComponent.bind(this);
      }
    
      hideComponent(name) {
        switch (name) {
          case "ordering1":
            this.setState({ ordering1: !this.state.ordering1 });
            break;
          case "ordering2":
            this.setState({ ordering2: !this.state.ordering2 });
            break;
          case "ordering3":
            this.setState({ ordering3: !this.state.ordering3 });
            break;
          default:
            return null;
        }
      }
    render() {
        const { ordering1, ordering2, ordering3 } = this.state;

        return (
            

            <div>
                {ordering2 && <Ordering2 />}
            {ordering3 && <Ordering3 />}

        <button onClick={() => this.hideComponent("ordering2")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => {this.hideComponent("ordering2"); this.hideComponent("ordering3")}}>
            Click to hide Demo3 component
          </button>
                
            </div>
        );
    }
}

export default OrderForm;