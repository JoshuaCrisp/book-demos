AFRAME.registerComponent('color-button-caller', {
    schema: {
    
    },

    init: function () {
        var el = this.el;
        console.log(el);
        var data = this.data;
        el.setAttribute('visible', true);
        var wireframe = document.querySelector('.wireframe');
        var container = document.querySelector('.container');

        var colorButtons = document.querySelectorAll('.color-picker-buttons');

        var colorOptions = function(){
            var selected = this;
            var color = selected.getAttribute('color');
            wireframe.setAttribute('color',color);
            
        }

        var getManipulators = function(){
            var manBtns = document.querySelector('#manipulationGrid');
            manBtns.setAttribute('manipulation-button-caller',{});
            el.removeEventListener('mouseenter',colorOptions);
            el.removeEventListener('click',getManipulators);
            el.setAttribute('visible', false);
            el.removeAttribute('color-button-caller');

            var plane = document.createElement('a-plane');
            plane.setAttribute('id','handleImgX');
            plane.setAttribute('class','manipulator');
            plane.setAttribute('height','0.226');
            plane.setAttribute('width','0.417');
            plane.setAttribute('position','1 1 0');
            plane.setAttribute('rotation','0 0 0');
            plane.setAttribute('opacity','0.5');
            plane.setAttribute('material','src:#handle-xu; alphaTest:0.5');
            plane.setAttribute('visible','false');
            container.appendChild(plane);
            var plane2 = document.createElement('a-plane');
            plane2.setAttribute('id','handleImgY');
            plane2.setAttribute('class','manipulator');
            plane2.setAttribute('height','0.416');
            plane2.setAttribute('width','0.226');
            plane2.setAttribute('position','0 2 0');
            plane2.setAttribute('rotation','0 0 0');
            plane2.setAttribute('opacity','0.5');
            plane2.setAttribute('material','src:#handle-yu; alphaTest:0.5');
            plane2.setAttribute('visible','false');
            container.appendChild(plane2);
            var plane3 = document.createElement('a-plane');
            plane3.setAttribute('id','handleImgZ');
            plane3.setAttribute('class','manipulator');
            plane3.setAttribute('height','0.345');
            plane3.setAttribute('width','0.188');
            plane3.setAttribute('position','0.7 1.7 0');
            plane3.setAttribute('rotation','0 0 0');
            plane3.setAttribute('opacity','0.5');
            plane3.setAttribute('material','src:#handle-zu; alphaTest:0.5');
            plane3.setAttribute('visible','false');
            container.appendChild(plane3);
            
            
        

        }
        for(var i = 0; i< colorButtons.length; i++){
        colorButtons[i].addEventListener('mouseenter', colorOptions);
        colorButtons[i].addEventListener('click', getManipulators);
        }
    },


});