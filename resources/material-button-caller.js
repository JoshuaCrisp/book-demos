AFRAME.registerComponent('material-button-caller', {
    schema: {
    
    },

    init: function () {
        var materials = document.querySelectorAll('.material-buttons');
        var el = this.el;

        var jay = document.querySelector('#jayModel');
        jay.setAttribute('sound','src: #material; autoplay: false;');
        jay.components.sound.playSound();

        materials[1].setAttribute('material', 'shader: standard; normalMap: #brick-normal-png;');
        materials[2].setAttribute('material', 'shader: standard; normalMap: #leather-normal-png;');
        materials[3].setAttribute('material', 'shader: standard; normalMap: #checkers-normal-png;');
        el.setAttribute('visible', true);

        function changeMaterial(){
            var wireFrame = document.querySelector('.wireframe');
            var mat = this.getAttribute('material');
            wireFrame.setAttribute('wireframe', false);
            wireFrame.setAttribute('material', mat);
           
        }

        var callColor= function(){
            el.setAttribute('visible', false);
            var colors = document.querySelector('#colorGrid');
            colors.setAttribute('color-button-caller',{});
        }



        

        for(var i = 0; i<materials.length; i++){
            (function(){
                materials[i].addEventListener('mouseenter', changeMaterial);
                materials[i].addEventListener('click', callColor);
            }());
        }


    }

});