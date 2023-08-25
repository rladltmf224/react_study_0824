import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    message: "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    message: "점심 식사 시간입니다.",
  },
  {
    message: "이제 곧 미팅이 시작됩니다.",
  },
  {
    message: "이제 곧 점심시간입니다.",
  },
  {
    message: "이제 곧 담타입니다.",
  },
  {
    message: "이제 집갑니다.",
  },
];
var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    //컴포넌트가 생길때
    this.addArray();
  }

  componentWillUnmount() {
    //컴포넌트가 사라질때
    if (timer) {
      clearInterval(timer);
    }
  }

  addArray() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification, index) => (
          <Notification key={index} message={notification.message} />
        ))}
      </div>
    );
  }
}

export default NotificationList;
