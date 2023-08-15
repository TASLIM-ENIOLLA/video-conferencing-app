export default class CamStreamer implements CamStreamerInterface {
  isUserMediaAvailable = false;

  constructor() {
    if(window) {
      const streamSource: any = navigator?.mediaDevices?.getUserMedia;

      this.isUserMediaAvailable = !!streamSource;
    }
  }

  async getStream() {
    return navigator.mediaDevices.getUserMedia({ video: true });
  }
}

interface CamStreamerInterface {
  isUserMediaAvailable: boolean;
  getStream: () => Promise<any>;
}