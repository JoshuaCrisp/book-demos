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

            object.removeAttribute('object-moveable',{});

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

            object.removeAttribute('object-moveable',{});
            
            
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

            scaleHandles.setAttribute('visible', false);
            handleImgX.removeAttribute('drag-scale-x',{});
            handleImgY.removeAttribute('drag-scale-y',{});
            handleImgZ.removeAttribute('drag-scale-z',{});

            if(tutMove){
                tutMove = false;
                jay.setAttribute('sound','src: #placement-xz; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        var walkAway = function(){
            var addBtn = document.querySelector('#addBtn');
            var btnText = document.querySelector('#btnText');
            addBtn.setAttribute('geometry-button-caller',{});
            btnText.setAttribute('value', "");
            addBtn.setAttribute('visible','true');
            
            jay.setAttribute('animation-mixer','clip: walk;');
            var turn = document.createElement('a-animation');

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

        var created = function(){

            if(tutCreated){
                tutCreated = false;
            jay.setAttribute('animation-mixer','clip: talking;');
            jay.setAttribute('sound','src: #created; autoplay: false;');
            jay.components.sound.playSound();
            jay.addEventListener('sound-ended', walkAway)
            }
        }

         
         var yHandle = document.querySelector('#handleImgy');
         var zHandle = document.querySelector('#handleImgz');
         


     
     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
     btns[3].addEventListener('click', created);
    }

   


});