AFRAME.registerComponent('make-primitives', {
    schema: {
    },

    init: function () {

        var scene = document.querySelector('#scene');
        var origin = document.querySelector('#geo-platform');
        var position = origin.getAttribute('position');
        var el = this.el;
        var id = el.getAttribute('id');
        var container = document.createElement('a-entity');
        container.setAttribute('position', position);
        container.setAttribute('class', 'container');
        scene.appendChild(container);

        var makeCube = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){existing.parentNode.removeChild(existing);} 
            var cube = document.createElement('a-box');
            cube.setAttribute('position', '0 1 0');
            cube.setAttribute('color', 'black');
            cube.setAttribute('wireframe', true);
            cube.setAttribute('class', 'wireframe');
            container.appendChild(cube);
        }

        var makeSphere= function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var sphere = document.createElement('a-sphere');
            sphere.setAttribute('position', '0 1 0');
            sphere.setAttribute('color', 'black');
            sphere.setAttribute('segments-height', '6');
            sphere.setAttribute('segments-width', '12');
            sphere.setAttribute('wireframe', true);
            sphere.setAttribute('class', 'wireframe');
            container.appendChild(sphere);
        }

        var makeCone = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var cone = document.createElement('a-cone');
            cone.setAttribute('segments-height', '6');
            cone.setAttribute('segments-radial', '12');
            cone.setAttribute('position', '0 1 0');
            cone.setAttribute('color', 'black');
            cone.setAttribute('wireframe', true);
            cone.setAttribute('class', 'wireframe');
            container.appendChild(cone);           
        }

        var makeTorus = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var torus = document.createElement('a-torus');
            torus.setAttribute('position', '0 1 0');
            torus.setAttribute('segments-radial', 12);
            torus.setAttribute('segments-tubular', 8);
            torus.setAttribute('color', 'black');
            torus.setAttribute('wireframe', true);
            torus.setAttribute('class', 'wireframe');
            container.appendChild(torus);
        }

       var makeCylinder = function(){
        var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var cylinder = document.createElement('a-cylinder');
            cylinder.setAttribute('segments-height', '6');
            cylinder.setAttribute('segments-radial', '12');
            cylinder.setAttribute('position', '0 1 0');
            cylinder.setAttribute('color', 'black');
            cylinder.setAttribute('wireframe', true);
            cylinder.setAttribute('class', 'wireframe');
            container.appendChild(cylinder);
           
       }

       var getMaterials = function(){
        origin.setAttribute('opacity', '0');
        el.removeAttribute('make-primitives');
        el.setAttribute('visible',false);
        b_0.removeEventListener('mouseenter', makeCube);
        b_1.removeEventListener('mouseenter', makeSphere);
        b_2.removeEventListener('mouseenter', makeCone);
        b_3.removeEventListener('mouseenter', makeTorus);
        b_4.removeEventListener('mouseenter', makeCylinder);
        b_0.removeEventListener('click', getMaterials);
        b_1.removeEventListener('click', getMaterials);
        b_2.removeEventListener('click', getMaterials);
        b_3.removeEventListener('click', getMaterials);
        b_4.removeEventListener('click', getMaterials);
        var materials = document.querySelector('#materialGrid');
        materials.setAttribute('material-button-caller', {});
       }

        var b_0 = document.querySelector('#geometry-button_0');
        b_0.addEventListener('mouseenter', makeCube);
        b_0.addEventListener('click', getMaterials);

        var b_1 = document.querySelector('#geometry-button_1');
        b_1.addEventListener('mouseenter', makeSphere);
        b_1.addEventListener('click', getMaterials);


        var b_2 = document.querySelector('#geometry-button_2');
        b_2.addEventListener('mouseenter', makeCone);
        b_2.addEventListener('click', getMaterials);


        var b_3 = document.querySelector('#geometry-button_3');
        b_3.addEventListener('mouseenter', makeTorus);
        b_3.addEventListener('click', getMaterials);


        var b_4 = document.querySelector('#geometry-button_4');
        b_4.addEventListener('mouseenter', makeCylinder);
        b_4.addEventListener('click', getMaterials);




    }

});

