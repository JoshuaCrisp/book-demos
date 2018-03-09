AFRAME.registerComponent('manipulation-button-caller', {
    schema: {

    },

    init: function () {
        var el = this.el;
        el.setAttribute('visible', true);
        var jay = document.querySelector('#jayModel');
        var btns = document.querySelectorAll('.manipulation-buttons');
        var object = document.querySelector('.wireframe');
        var rotHandles = document.querySelector('.rotHandles');
        var scaleHandles = document.querySelector('.scaleHandles');

        var rotHandleImgX = document.querySelector('#rotHandleImgX');
        var rotHandleImgY = document.querySelector('#rotHandleImgY');
        var rotHandleImgZ = document.querySelector('#rotHandleImgZ');
    
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');

        if(tutManipulate){
            tutManipulate = false;
            jay.setAttribute('sound','src: #manipulation; autoplay: false;');
            jay.components.sound.playSound();
        }
       
        var playRotate= function(){
            rotHandles.setAttribute('visible','true');
            rotHandleImgX.setAttribute('drag-rotate-x',{});
            rotHandleImgY.setAttribute('drag-rotate-y',{});
            rotHandleImgZ.setAttribute('drag-rotate-z',{});

            scaleHandles.setAttribute('visible','false');
            handleImgX.removeAttribute('drag-scale-x');
            handleImgY.removeAttribute('drag-scale-y');
            handleImgZ.removeAttribute('drag-scale-z');

            if (tutRotate){
                tutRotate = false;
                jay.setAttribute('sound','src: #rotation; autoplay: false;');
                jay.components.sound.playSound();
            }
        }
        
        var playScale= function(){
            scaleHandles.setAttribute('visible', true);
            handleImgX.setAttribute('drag-scale-x',{});
            handleImgY.setAttribute('drag-scale-y',{});
            handleImgZ.setAttribute('drag-scale-z',{});

            rotHandles.setAttribute('visible','false');
            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgZ.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');
            
            
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

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');

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