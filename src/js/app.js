(function() {
  'use strict';

  const trafficCams = () => {
    const $trafficCams = document.getElementsByClassName('traffic-cams')[0];
    let $cams;
    let refresh = 0;
    const cams = [
      {name: 'Parmer', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35%20@%20Parmer%20Ln%20(12700)%20116_AUS.JPG?ds=1485978657908'},
      {name: 'VFW', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35%20@%20VFW%20Road%20(12100)%20119_AUS.JPG?ds=1485978747999'},
      {name: 'Walnut Creek', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35 @ Walnut Creek (12000) 120_AUS.JPG?ds=1486491365650'},
      {name: 'Braker', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35 @ Braker Ln (11300) 122_AUS.JPG?ds=1486491486917'},
      {name: 'Middle Fiskville', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35 @ Middle Fiskville (11000) 124_AUS.JPG?ds=1486491539520'},
      {name: '51st', url: 'http://its.txdot.gov/ITS_WEB/FrontEnd/snapshots/IH-35%20@%2051st%20St%20(5100)%20139_AUS.JPG?ds=1485978885223'},
    ];

    cams.forEach((cam) => {
      const tmpl = `<li class="cam">
                    <h3 class="cam-name">${cam.name}</h3>
                    <img class="cam-img" src="${cam.url}">
                  </li>`;
      $trafficCams.innerHTML += tmpl;
    });

    $cams = $trafficCams.getElementsByClassName('cam');

    const refreshImages = () => {
      Array.prototype.forEach.call($cams, (element) => {
        let img = element.getElementsByClassName('cam-img')[0];
        img.src = img.src + '&refresh=' + refresh;
      });

      refresh++;
    };

    setInterval(refreshImages, 20000);
  };

  trafficCams();

}());
