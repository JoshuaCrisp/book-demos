AFRAME.registerComponent('talk', {
    schema: { 
        src:{type: 'string', default: ""},
        autoplay: {type: 'boolean', default: false}
    },

    init: function () {
       var el = this.el;
       var jay = document.querySelector('#jayModel');
       jay.components.sound.playSound();
       var camera = document.querySelector('#camera');
       camera.setAttribute('look-trigger','hasLookedUp:false; hasLookedDown:false');

        
    }
});