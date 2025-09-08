class ChatRoom {
  showMessage(user, message) {
    console.log(`${user}: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  send(message) {
    this.chatRoom.showMessage(this.name, message);
  }
}

// الاستخدام
const chatRoom = new ChatRoom();
const user1 = new User("Ahmed", chatRoom);
const user2 = new User("Omar", chatRoom);

user1.send("Hello Omar!");
user2.send("Hi Ahmed!");
