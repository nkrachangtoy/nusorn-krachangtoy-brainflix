import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainVideo from "./components/MainVideo";
import MainContent from "./components/MainContent";
import "./styles/main.css";

class App extends React.Component {
  // State will assets data for this site
  state = {
    commentCount: 3,

    // Default Comments
    commentData: [
      {
        id: 1,
        name: "Micheal Lyons",
        timestamp: "1530744338878",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        likes: 0,
      },
      {
        id: 2,
        name: "Gary Wong",
        timestamp: "1530744338878",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
      },
      {
        id: 3,
        name: "Theodore Duncan",
        timestamp: "1530744138878",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
      },
    ],

    // Icons asset
    icons: [
      {
        likesIcon: "./assets/Icons/SVG/Icon-likes.svg",
      },
      {
        viewsIcon: "./assets/Icons/SVG/Icon-views.svg",
      },
    ],

    // Main Video
    mainVideo: {
      id: 1,
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Sounthern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "Red Cow",
      path: "./assets/Images/video-list-0.jpg",
      views: "1,001,023",
      likes: "110,985",
      duration: "0:42",
      video: "./assets/Video/BrainStation-Sample-Video.mp4",
      timestamp: 1530744338878,
      comments: "type of <array>",
    },

    // Side Video
    sideVideo: [
      {
        id: 1,
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Scotty Cranner",
        path: "/video-images/video-list-1.jpg",
      },
      {
        id: 2,
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        path: "/video-images/video-list-2.jpg",
      },
      {
        id: 3,
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        path: "/video-images/video-list-3.jpg",
      },
      {
        id: 4,
        title: "Cheap Airline Tickets Great Ways to Save",
        channel: "Emily Harper",
        path: "/video-images/video-list-4.jpg",
      },
      {
        id: 5,
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        path: "/video-images/video-list-5.jpg",
      },
      {
        id: 6,
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        path: "/video-images/video-list-6.jpg",
      },
      {
        id: 7,
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        path: "/video-images/video-list-7.jpg",
      },
      {
        id: 8,
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        path: "/video-images/video-list-8.jpg",
      },
    ],
  };

  // This function will count total number of comments
  handleClick = (clickEvent) => {
    clickEvent.preventDefault();
    const formId = clickEvent.target.id;
    console.log("Old State: ", this.state);
    this.setState(
      {
        [formId]: this.state[formId] + 1,
      },
      () => {
        console.log("New State: ", this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainVideo mainVideo={this.state.mainVideo} />
        <MainContent
          commentData={this.state.commentData}
          mainVideo={this.state.mainVideo}
          sideVideo={this.state.sideVideo}
          count={this.state.commentCount}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
