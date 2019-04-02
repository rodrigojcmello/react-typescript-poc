const cordovaApp = {
  iniciar() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );
  },

  onDeviceReady() {
    // alert('teste');
  }
};

export default cordovaApp;
