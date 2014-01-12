    "use strict";
    window.addEventListener('load', init, false); 
    var constants = new Object(); 
    var transformObject;
    var transformObject2;
    var svgElement;
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    function initConstants()
    {
      constants.delay = 12; 
      constants.initialTheta = 0;
      constants.thetaDelta = 0.3;
      svgElement = document.getElementById("svgElement");
      transformObject = svgElement.createSVGTransform();
      transformObject2 = svgElement.createSVGTransform();
    }

    function init() {
      var head0 = document.getElementById("head0"); 
      var lleg0 = document.getElementById("lleg0"); 
      var rleg0 = document.getElementById("rleg0"); 
      initConstants(); 

      head0.transform.baseVal.appendItem(transformObject); 
      head0.currentTheta = constants.initialTheta;
      lleg0.transform.baseVal.appendItem(transformObject); 
      lleg0.currentTheta = constants.initialTheta;
      rleg0.transform.baseVal.appendItem(transformObject2); 
      rleg0.currentTheta = constants.initialTheta;

      //requestAnimationFrameID = window.requestAnimationFrame(doRotate);
      //requestAnimationFrameID = window.requestAnimationFrame(doJump);
      //requestAnimationFrameID = window.requestAnimationFrame(doHead);
      requestAnimationFrameID = window.requestAnimationFrame(doLeg);

    }

    function doAnim() {
    }

    function doRotate() {
      ball0.transform.baseVal.getItem(0).setRotate(ball0.currentTheta, 0, 0);
      ball0.currentTheta += constants.thetaDelta; 
      requestAnimationFrameID = window.requestAnimationFrame(doRotate); 
    }

    function doJump() {
      ball1.vx = 50;
      ball1.vy = 50;
      ball1.x.baseVal.value += s2d(ball1.vx);
      requestAnimationFrameID = window.requestAnimationFrame(doJump); 
    }

    function doHead() {
      head0.transform.baseVal.getItem(0).setRotate(head0.currentTheta, 300, 150);
      head0.currentTheta += constants.thetaDelta; 
      if(head0.currentTheta > 10 || head0.currentTheta < -10) constants.thetaDelta*=-1;
      requestAnimationFrameID = window.requestAnimationFrame(doHead); 
    }

    function doLeg() {
      rleg0.transform.baseVal.getItem(0).setRotate(rleg0.currentTheta, 300, 200);
      lleg0.currentTheta += constants.thetaDelta; 
      lleg0.transform.baseVal.getItem(0).setRotate(lleg0.currentTheta, 300, 200);
      rleg0.currentTheta += constants.thetaDelta; 
      if(lleg0.currentTheta > 15 || lleg0.currentTheta < -15) constants.thetaDelta*=-1;
      if(rleg0.currentTheta > 45 || rleg0.currentTheta < -45) constants.thetaDelta*=-1;
      requestAnimationFrameID = window.requestAnimationFrame(doLeg); 
    }

    function s2d(s){
      return (s / 1000) * constants.delay; 
    }
