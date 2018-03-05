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
            var node = document.querySelector('#node-portol');
            node.setAttribute('material','src:#nodeImg2;');
            jay.setAttribute('sound','src: #rotation; autoplay: false;');
            object.setAttribute('object-rotatable',{});
            object.removeAttribute('object-scaleable');
            object.removeAttribute('object-moveable');
            jay.components.sound.playSound();
        }
        
        var playScale= function(){
            var node = document.querySelector('#node-portol');
            node.setAttribute('material','src:#nodeImg2;');
            jay.setAttribute('sound','src: #scale; autoplay: false;');
            object.removeAttribute('object-rotatable');
            object.removeAttribute('object-moveable');
            object.setAttribute('object-scaleable',{});
            jay.components.sound.playSound();
        }

        var playMove= function(){
            var node = document.querySelector('#node-portol');
            node.setAttribute('material','src:#nodeImg2;');
            jay.setAttribute('sound','src: #placement; autoplay: false;');
            object.removeAttribute('object-rotatable');
            object.removeAttribute('object-scaleable');
            object.setAttribute('object-moveable',{});
            jay.components.sound.playSound();
        }

         
         var yHandle = document.querySelector('#handleImgy');
         var zHandle = document.querySelector('#handleImgz');
         


     
     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
    }

   


});