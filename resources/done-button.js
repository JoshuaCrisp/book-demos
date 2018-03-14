AFRAME.registerComponent('done-button', {
    schema: {},

    init: function () {

        var scene = document.querySelector('#scene');
        var jay = document.querySelector('#jayModel');

        scene.removeAttribute('add-button-caller');

        jay.setAttribute('sound','src: #done; autoplay: false;');
        jay.components.sound.playSound();

        

        var showGraph = function(){
            var graph = document.querySelector('#scene-graph');
            graph.setAttribute('visible', 'true');
        }

        var showCamera = function(){
            var camera = document.querySelector('#camera');
            var camcorder = document.querySelector('#scene-camcorder');

            var moveback = document.createElement('a-animation');
            moveback.setAttribute('attribute','position');
            moveback.setAttribute('from','0 0 0');
            moveback.setAttribute('to','0 2 5');
            moveback.setAttribute('dur','1000');

            var camVisible = document.createElement('a-animation');
            camVisible.setAttribute('attribute','model-opacity');
            camVisible.setAttribute('from','0');
            camVisible.setAttribute('to','1');
            camVisible.setAttribute('dur','1000');

            camera.appendChild(moveback);

            camcorder.setAttribute('visible', 'true');
            camcorder.appendChild(camVisible); 

         }

         setTimeout(showGraph, 11000);
         setTimeout(showCamera, 38500);
    }

       

        
        
        
   
});











    
