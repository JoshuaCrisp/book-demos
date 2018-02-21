AFRAME.registerComponent('manipulation-button-caller', {
    schema: {

    },

    init: function () {
        var played = 0;
        var el = this.el;
        el.setAttribute('visible', true);
        var jay = document.querySelector('#jayModel');
        jay.setAttribute('sound','src: #manipulation; autoplay: false;');
        jay.components.sound.playSound();
        
        var btns = document.querySelectorAll('.manipulation-buttons');
        var object = document.querySelector('.wireframe');
        var sound = "";
        console.log(object);
       
        var playRotate= function(){
            jay.setAttribute('sound','src: #rotation; autoplay: false;');
            jay.components.sound.playSound();
        }
        
        var playScale= function(){
            jay.setAttribute('sound','src: #scale; autoplay: false;');
            jay.components.sound.playSound();
        }

        var playMove= function(){
            jay.setAttribute('sound','src: #placement; autoplay: false;');
            jay.components.sound.playSound();
        }
        
     var makeHandles = function(){
         var node = document.querySelector('#node-portol');
         node.setAttribute('material','src:#nodeImg2;');
         var plane = document.createElement('a-plane');
         plane.setAttribute('id','handleImgX');
         plane.setAttribute('height','0.226');
         plane.setAttribute('width','0.417');
         plane.setAttribute('position','1 0 0');
         plane.setAttribute('rotation','0 0 0');
         plane.setAttribute('material','src:#handle-xu; alphaTest:0.5');
         object.appendChild(plane);
         var plane2 = document.createElement('a-plane');
         plane2.setAttribute('id','handleImgY');
         plane2.setAttribute('height','0.416');
         plane2.setAttribute('width','0.226');
         plane2.setAttribute('position','0 1 0');
         plane2.setAttribute('rotation','0 0 0');
         plane2.setAttribute('material','src:#handle-yu; alphaTest:0.5');
         object.appendChild(plane2);
         var plane3 = document.createElement('a-plane');
         plane3.setAttribute('id','handleImgZ');
         plane3.setAttribute('height','0.345');
         plane3.setAttribute('width','0.188');
         plane3.setAttribute('position','0.7 0.7 0');
         plane3.setAttribute('rotation','0 0 0');
         plane3.setAttribute('material','src:#handle-zu; alphaTest:0.5');
         object.appendChild(plane3);

         
         var yHandle = document.querySelector('#handleImgy');
         var zHandle = document.querySelector('#handleImgz');
         

         var add = function(){
             console.log(played + 1);
             played++;
         }

     }
     btns[0].addEventListener('click', makeHandles);
     btns[0].addEventListener('sound-ended', add);
     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
     jay.addEventListener('sound-ended',add);
    }

   


});