class Game {
  start() { console.log("Game started"); }
  end() { console.log("Game ended"); }
  play() {}
  run() {
    this.start();
    this.play();
    this.end();
  }
}

class Football extends Game {
  play() { console.log("Playing Football"); }
}

const football = new Football();
football.run();
