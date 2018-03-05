AFRAME.registerComponent('manipulation-button-caller', {
    schema: {

    },

    init: function () {
        var el = this.el;
        el.setAttribute('visible', true);
        var jay = document.querySelector('#jayModel');
        var btns = document.querySelectorAll('.manipulation-buttons');
        var object = document.querySelector('.wireframe');
        
        if(tutManipulate){
            tutManipulate = false;
            jay.setAttribute('sound','src: #manipulation; autoplay: false;');
            jay.components.sound.playSound();
        }
       
        var playRotate= function(){   
            object.setAttribute('object-rotatable',{});
            object.removeAttribute('object-scaleable');
            object.removeAttribute('object-moveable');
    
            if (tutRotate){
                tutRotate = false;
                jay.setAttribute('sound','src: #rotation; autoplay: false;');
                jay.components.sound.playSound();
            }
        }
        
        var playScale= function(){
            var node = document.querySelector('#node-portol');
            
            object.removeAttribute('object-rotatable');
            object.removeAttribute('object-moveable');
            object.setAttribute('object-scaleable',{});
            
            if(tutScale){
                tutScale = false;
                jay.setAttribute('sound','src: #scale; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        var playMove= function(){          
            object.removeAttribute('object-rotatable');
            object.removeAttribute('object-scaleable');
            object.setAttribute('object-moveable',{});

            if(tutMove){
                tutMove = false;
                jay.setAttribute('sound','src: #placement-xz; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

         
         var yHandle = document.querySelector('#handleImgy');
         var zHandle = document.querySelector('#handleImgz');
         


     
     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
    }

   


});