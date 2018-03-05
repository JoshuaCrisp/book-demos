AFRAME.registerComponent('make-primitives', {
    schema: {
    },

    init: function () {

        var scene = document.querySelector('#scene');
        var origin = document.querySelector('#addBtn');
        var position = "0 -1 -3";
        var el = this.el;
        var id = el.getAttribute('id');
        var container = document.createElement('a-entity');
        container.setAttribute('position', position);
        container.setAttribute('class', 'container');
        scene.appendChild(container);

        var zoom= document.createElement('a-animation');
        zoom.setAttribute('attribute','position');
        zoom.setAttribute('dur','500');
        zoom.setAttribute('from','0 1 -30');
        zoom.setAttribute('to','0 1 -0');

        var fade= document.createElement('a-animation');
        fade.setAttribute('attribute','opacity');
        fade.setAttribute('dur','500');
        fade.setAttribute('from','0');
        fade.setAttribute('to','1');

        var makeCube = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){existing.parentNode.removeChild(existing);} 
            var cube = document.createElement('a-box');
            cube.setAttribute('position', '0 1 -20');
            cube.setAttribute('color', 'black');
            cube.setAttribute('opacity', '0');
            cube.setAttribute('wireframe', true);
            cube.setAttribute('class', 'wireframe');
            container.appendChild(cube);
            cube.appendChild(zoom);
            cube.appendChild(fade);
        }

        var makeSphere= function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var sphere = document.createElement('a-sphere');
            sphere.setAttribute('position', '0 1 0');
            sphere.setAttribute('color', 'black');
            sphere.setAttribute('opacity', '0');
            sphere.setAttribute('segments-height', '6');
            sphere.setAttribute('segments-width', '12');
            sphere.setAttribute('wireframe', true);
            sphere.setAttribute('class', 'wireframe');
            container.appendChild(sphere);
            sphere.appendChild(zoom);
            sphere.appendChild(fade);
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
            cone.setAttribute('opacity', '0');
            cone.setAttribute('wireframe', true);
            cone.setAttribute('class', 'wireframe');
            container.appendChild(cone);
            cone.appendChild(zoom);
            cone.appendChild(fade);          
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
            torus.setAttribute('rotation', '90 0 0');
            torus.setAttribute('opacity', '0');
            torus.setAttribute('wireframe', true);
            torus.setAttribute('class', 'wireframe');
            container.appendChild(torus);
            torus.appendChild(zoom);
            torus.appendChild(fade);
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
            cylinder.setAttribute('opacity', '0');
            cylinder.setAttribute('wireframe', true);
            cylinder.setAttribute('class', 'wireframe');
            container.appendChild(cylinder);
            cylinder.appendChild(zoom);
            cylinder.appendChild(fade);
           
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


        var materialGrid = document.createElement('a-entity');
        materialGrid.setAttribute('gridify-buttons',"class: color-picker-buttons; btnCount: 12; btnWidth: 1;  columns: 3; btnHeight: 1; spacing: 0.1; normals:true; url:assets/buttons/materialBtns/; imagebase: material");
        materialGrid.setAttribute('id',"colorGrid");
        materialGrid.setAttribute('class',"button");
        materialGrid.setAttribute('position', "1 3 -3");
        materialGrid.setAttribute('scale', "0.5 0.5 0.5");
        scene.appendChild(materialGrid);
        materialGrid.setAttribute('color-button-caller', {});
        scene.removeChild(el);
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

