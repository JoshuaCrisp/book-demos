AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {
        var el = this.el;
        var jay = document.querySelector('#jayModel');
        var btnText = document.querySelector('#btnText');
        
        var stopTalking =function(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        var getBtn =function(){
            
            el.setAttribute('geometry-button-caller',{});
            btnText.setAttribute('value', "click to create object");
            el.setAttribute('visible','true');
            jay.removeEventListener('sound-ended', getBtn);
            el.removeAttribute('jay-caller');      
        }


        var fadeIn = function(){
            el.setAttribute('visible', false);
            var fadeInObject= document.createElement('a-animation');
            fadeInObject.setAttribute('attribute','model-opacity');
            fadeInObject.setAttribute('dur','2000');
            fadeInObject.setAttribute('from','0');
            fadeInObject.setAttribute('to','1');
            jay.appendChild(fadeInObject);
            el.removeEventListener('click', fadeIn);
        }

        function selected(){
            el.setAttribute('scale', '1.2 1.2 1.2');
        }

        function unselected(){
            el.setAttribute('scale', '1 1 1');
        }


        jay.addEventListener('sound-ended', stopTalking);
        jay.addEventListener('sound-ended', getBtn);
        el.addEventListener('mouseenter', selected);
        el.addEventListener('mouseleave', unselected);
        el.addEventListener('click', fadeIn);
        


    },

    tick: function(){
        var jay = document.querySelector('#jayModel');
        var opacity = jay.getAttribute('model-opacity');
        var el = this.el;
        
        if(opacity >= 1){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','16500');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-4 -1 -16');
            walkObject.setAttribute('to','-2 -1 -3');
            walkObject.setAttribute('delay','500');
            jay.appendChild(walkObject);
            jay.setAttribute('animation-mixer','clip: walk;');          
            jay.components.sound.playSound();
            el.setAttribute('geometry-button-caller',{});
            addBtn.setAttribute('visible', false);
            el.removeAttribute('jay-caller');
        }
    }


   


});