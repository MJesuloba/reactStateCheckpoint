import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";
import { Modal } from "react-responsive-modal";
import Profile from "./Components/Profile/Profile";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Jaybee Moore",
      bio:
        "Problem solver and fast learner with strong communication skills. I am motivated to upgrade and expand my skill set through mentorship and challenging projects. I enjoy working collaboratively but can also run with projects independently.",
        
      profession: "Fullstack js",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>Time : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "#3fb0ac" }}>Welcome to my website</h1>
          <p>press the button to show the profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profile persone={this.state.Person} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
