AFRAME.registerComponent('object-created', {
    schema: {},

    init: function () {

        var jay = document.querySelector('#jayModel');
        
        var buttons = document.querySelector('.manButtonGrid');
        scene.removeChild(buttons);


        if(tutCreated){
            tutCreated = false;
        jay.setAttribute('animation-mixer','clip: talking;');
        jay.setAttribute('sound','src: #created; autoplay: false;');
        jay.components.sound.playSound();
        jay.addEventListener('sound-ended', walkAway)
        }

        var walkAway = function(){
    
            jay.setAttribute('animation-mixer','clip: walk;');

            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','28000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-2 -1 -3');
            walkObject.setAttribute('to','-28 -1 -3');
            walkObject.setAttribute('delay','1000');

            var turnObject= document.createElement('a-animation');
            turnObject.setAttribute('attribute','rotation');
            turnObject.setAttribute('dur','1500');
            turnObject.setAttribute('easing','linear');
            turnObject.setAttribute('from','0 30 0');
            turnObject.setAttribute('to','0 -55 0');
            jay.appendChild(turnObject);
            jay.appendChild(walkObject);

            jay.removeEventListener('sound-ended',walkAway);
        }

        }
   
});











    
