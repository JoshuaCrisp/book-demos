AFRAME.registerComponent('color-button-caller', {
    schema: {
    
    },

    init: function () {
        var scene = document.querySelector('#scene');
        var el = this.el;
        var data = this.data;
        el.setAttribute('visible', true);
        
        
        if(tutMaterial){
            tutMaterial = false;
            var jay = document.querySelector('#jayModel');
            jay.setAttribute('sound','src: #material; autoplay: false;');
            jay.setAttribute('animation-mixer','clip: talking;');
            jay.components.sound.playSound();
        }
        
        var wireframe = document.querySelector('.wireframe');
        var container = document.querySelector('.container');

        var colorButtons = document.querySelectorAll('.color-picker-buttons');

        var colorOptions = function(){
            var selected = this;
            var material = selected.getAttribute('material');
            wireframe.setAttribute('material',material);
            
        }

        var getManipulators = function(){
            var colorGrid = document.querySelector('#colorGrid');
            var manBtns = document.createElement('a-entity');
            manBtns.setAttribute('gridify-buttons',"class: manipulation-buttons; btnCount: 4; btnWidth: 1;  columns: 4; btnHeight: 1; spacing: 0.2;  url:assets/buttons/manipulationBtns/; imagebase: manipulation-button" );
            manBtns.setAttribute('position', " 3 -0.5 -2.2");
            manBtns.setAttribute('rotation', "-30 -25 0");
            manBtns.setAttribute('scale', "0.5 0.5 0.5");
            manBtns.setAttribute('class', "button");
            scene.appendChild(manBtns);
            manBtns.setAttribute('manipulation-button-caller',{});
            el.removeEventListener('mouseenter',colorOptions);
            el.removeEventListener('click',getManipulators);
            el.setAttribute('visible', false);
            el.removeAttribute('color-button-caller');
            scene.removeChild(el);
            
            
            
        

        }
        for(var i = 0; i< colorButtons.length; i++){
        colorButtons[i].addEventListener('mouseenter', colorOptions);
        colorButtons[i].addEventListener('click', getManipulators);
        }
    },


});