AFRAME.registerComponent('manipulation-button-caller', {
    schema: {

    },

    init: function () {
        var el = this.el;
        var scene = this.el.sceneEl;
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
            object.setAttribute('object-moveable',{});

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');

            scaleHandles.setAttribute('visible', false);
            handleImgX.removeAttribute('drag-scale-x');
            handleImgY.removeAttribute('drag-scale-y');
            handleImgZ.removeAttribute('drag-scale-z');
            handleImgZ.removeAttribute('drag-scale-z');

            if(tutMove){
                tutMove = false;
                jay.setAttribute('sound','src: #placement-xz; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        var created = function(){
            objectCount +=1;
            object.removeAttribute('object-moveable');

            var container = document.querySelector('.container');
            container.setAttribute('class','container'+objectCount);

            var mesh = document.querySelector('.mesh');
            mesh.setAttribute('class','mesh'+objectCount);

            var manButtonGrid = document.querySelector('.manButtonGrid');
            manButtonGrid.parentNode.removeChild(manButtonGrid);
            
            var wireframe = document.querySelector('.wireframe');
            wireframe.setAttribute('class','wireframe'+objectCount);

            handleImgX.removeAttribute('drag-scale-x',{});
            handleImgY.removeAttribute('drag-scale-y',{});
            handleImgZ.removeAttribute('drag-scale-z',{});

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');

            scaleHandles.parentNode.removeChild(scaleHandles);
            rotHandles.parentNode.removeChild(rotHandles);

            var graph = document.querySelector('#scene-graph');

            var scenegraph = object.cloneNode();
            scenegraph.setAttribute('material', wireframe.getAttribute('material'));
            console.log(scenegraph);
            graph.appendChild(scenegraph);
            scenegraph.setAttribute('position',
            {x: objectXpos, y: objectYpos, z: 0});
            objectXpos += 3;
            if (objectXpos >= 14){
                objectXpos = -14
                objectYpos -=4;
            }



            if(tutCreated){
                tutCreated = false;
                jay.setAttribute('sound','src: #created; autoplay: false;');
                jay.components.sound.playSound();
                jay.addEventListener('sound-ended',walkAway);
            } else {
                scene.setAttribute('add-button-caller',{});
                el.removeAttribute('manipulation-button-caller');
                scene.removeChild(el);
            }
        }

        var idle = function(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        var walkAway = function(){

            jay.setAttribute('animation-mixer','clip: walk;');

            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','6000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-2 -1 -4');
            walkObject.setAttribute('to','-5 -1 -4');
            walkObject.setAttribute('delay','1000');

            var turnObject= document.createElement('a-animation');
            turnObject.setAttribute('attribute','rotation');
            turnObject.setAttribute('dur','1500');
            turnObject.setAttribute('easing','linear');
            turnObject.setAttribute('from','0 30 0');
            turnObject.setAttribute('to','0 -55 0');

            var turnBackObject= document.createElement('a-animation');
            turnBackObject.setAttribute('attribute','rotation');
            turnBackObject.setAttribute('dur','2000');
            turnBackObject.setAttribute('easing','linear');
            turnBackObject.setAttribute('from','0 -55 0');
            turnBackObject.setAttribute('to','0 45 0');
            turnBackObject.setAttribute('delay','6000');

            
            jay.appendChild(turnObject);
            jay.appendChild(walkObject);
            jay.appendChild(turnBackObject);
            setTimeout(idle, 8000);

            jay.removeEventListener('sound-ended',walkAway);

            scene.setAttribute('add-button-caller',{});
            el.removeAttribute('manipulation-button-caller');
            scene.removeChild(el);
        }
         
         var yHandle = document.querySelector('#handleImgy');
         var zHandle = document.querySelector('#handleImgz');
         


     
     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
     btns[3].addEventListener('click', created);
    }

   


});