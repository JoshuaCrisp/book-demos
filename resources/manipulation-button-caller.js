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
            object.removeAttribute('object-rotatable');
            object.removeAttribute('object-scaleable');
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

            var container = document.querySelector('.container');
            container.setAttribute('class','container'+objectCount);

            var mesh = document.querySelector('.mesh');
            mesh.setAttribute('class','mesh'+objectCount);

            var wireframe = document.querySelector('.wireframe');
            wireframe.setAttribute('class','wireframe'+objectCount);

            handleImgX.removeAttribute('drag-scale-x',{});
            handleImgY.removeAttribute('drag-scale-y',{});
            handleImgZ.removeAttribute('drag-scale-z',{});

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');

            object.removeAttribute('object-moveable',{});

            scaleHandles.parentNode.removeChild(scaleHandles);
            rotHandles.parentNode.removeChild(rotHandles);

           
            console.log(objectCount);

            scene.setAttribute('add-button-caller',{});
            console.log(scene);


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