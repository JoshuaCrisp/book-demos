AFRAME.registerComponent('color-button-caller', {
    schema: {
    
    },

    init: function () {
        var el = this.el;
        console.log(el);
        var data = this.data;
        el.setAttribute('visible', true);
        var wireframe = document.querySelector('.wireframe');

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
            
            
        

        }
        for(var i = 0; i< colorButtons.length; i++){
        colorButtons[i].addEventListener('mouseenter', colorOptions);
        colorButtons[i].addEventListener('click', getManipulators);
        }
    },


});