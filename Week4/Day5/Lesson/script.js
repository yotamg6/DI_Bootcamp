//exe
// # Part 1
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

// class TV {
//   constructor(brand) {
//     this.brand = brand;
//     this.channel = 1;
//     this.volume = 50;
//   }
//   increaseVol() {
//     this.volume++;
//   }
//   decreaseVol() {
//     this.volume--;
//   }
// }
// class SmartTv extends TV {
//   constructor(brand) {
//     super(brand);
//   }
//   increaseVol() {
//     this.volume += 10;
//     this.netflix = true;
//   }
// }

// let lgTv = new TV("LG");
//exe 2
class TV {
  constructor(brand, noOfChannels, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
    this.noOfChannels = noOfChannels;
  }
  increaseVol() {
    this.volume > 100 ? this.volume : this.volume++;
    this.currentStatus();
  }
  decreaseVol() {
    this.volume < 0 ? this.volume : this.volume--;
    this.currentStatus();
  }
  setChannel(channelNumber) {
    this.noOfChannels < channelNumber
      ? this.channel
      : (this.channel = channelNumber);
    this.currentStatus();
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
    this.currentStatus();
  }
  currentStatus() {
    console.log(`${this.brand} at ${this.channel}, volume ${this.volume}`);
  }
}
let panasonic = new TV("panasonic", 35);
panasonic.setChannel(60);
panasonic.increaseVol();

// 1) Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
