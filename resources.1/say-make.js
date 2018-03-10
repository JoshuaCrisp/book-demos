AFRAME.registerComponent('say-make', {
    schema: { 
        src:{type: 'string', default: ""},
        autoplay: {type: 'boolean', default: false}
    },

    init: function () {
       var el = this.el;
       console.log(el);
       var jay = document.querySelector('#jayModel');
       jay.components.sound.playSound();
       var camera = document.querySelector('#camera');
       camera.setAttribute('look-trigger','hasLookedUp:false; hasLookedDown:false');
       console.log(camera);

        
    }
});