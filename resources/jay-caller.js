AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {

        this.el.sceneEl.removeAttribute('add-button-caller');
        
        var stopTalking =function(){
            this.setAttribute('animation-mixer','clip: idle;');
        }

        var getBtn =function(){
            tutWelcome = false;
            var scene = document.querySelector('#scene');
            scene.removeAttribute('audio-cue');
            scene.setAttribute('add-button-caller',{});
            this.removeEventListener('sound-ended', getBtn);     
        }

        this.el.addEventListener('sound-ended', stopTalking);
        this.el.addEventListener('sound-ended', getBtn);

        var fadeInObject= document.createElement('a-animation');
        fadeInObject.setAttribute('attribute','model-opacity');
        fadeInObject.setAttribute('dur','2000');
        fadeInObject.setAttribute('from','0');
        fadeInObject.setAttribute('to','1');
        this.el.appendChild(fadeInObject);


    },

    tick: function(){
        var scene = document.querySelector('#scene');

        var opacity = this.el.getAttribute('model-opacity');
        

        if(opacity >= 1){
            
            var scene = document.querySelector('#scene');         
            this.el.components.sound.playSound();
            this.el.removeAttribute('jay-caller');
            scene.setAttribute('audio-cue',{});

        }
    }


   


});