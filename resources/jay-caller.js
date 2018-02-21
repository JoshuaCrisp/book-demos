AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {
        var el = this.el;
        console.log('called');
        var jay = document.querySelector('#jayModel');
        
        

        var fadeInJay = function(){
        var fadeIn = document.createElement('a-animation');
        fadeIn.setAttribute('attribute','model-opacity');
        fadeIn.setAttribute('dur','2000');
        fadeIn.setAttribute('from','0');
        fadeIn.setAttribute('to','1');
        jay.appendChild(fadeIn);
        el.removeEventListener('click', fadeInJay);


        }

        el.addEventListener('click', fadeInJay);
        


    },

    tick: function(){

        var jay = document.querySelector('#jayModel');
        var opacity = jay.getAttribute('model-opacity');
        if(opacity >= 1){
            jay.setAttribute('animation-mixer','clip: talking;');
            var node = document.querySelector('#geo-platform');
            jay.setAttribute('talk',"src:#welcome; autoplay:false;");
            node.removeAttribute('jay-caller');
        }
    }

   


});