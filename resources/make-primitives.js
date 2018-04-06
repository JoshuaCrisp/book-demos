//This component sets up the mouseover, mouseleave, and click events for the geometry buttons

AFRAME.registerComponent('make-primitives', {
    schema: {},

    init: function () {

        var scene = document.querySelector('#scene');
        var position = "0 -1 -3";
        var el = this.el;
        var id = el.getAttribute('id');
        
        // Create a container. THis will hold the mesh and all of the handles 
        var container = document.createElement('a-entity');
        container.setAttribute('position', '0 -0.5 -3');
        container.setAttribute('class', 'container');

        //Create the entity for the mesh that will go into the container
        var mesh = document.createElement('a-entity');
        mesh.setAttribute('position','0 1 0');
        mesh.setAttribute('class','mesh');
        
        //Create the enity that the scale handles will go into
        var scaleHandles = document.createElement('a-entity');
        scaleHandles.setAttribute('class','scaleHandles');
        scaleHandles.setAttribute('position','0 0 0');
        scaleHandles.setAttribute('visible','false');

        //Create the entity that the rotation handles will go into
        var rotHandles = document.createElement('a-entity');
        rotHandles.setAttribute('class','rotHandles');
        rotHandles.setAttribute('visible','false');

        //Set up the  hierarchy for these entities
        scene.appendChild(container);
        container.appendChild(mesh);
        mesh.appendChild(scaleHandles);
        mesh.appendChild(rotHandles);

        //Create a zoom animation
        var zoom= document.createElement('a-animation');
        zoom.setAttribute('attribute','position');
        zoom.setAttribute('dur','500');
        zoom.setAttribute('from','0 0 -30');
        zoom.setAttribute('to','0 0 0');

        //Create a fade-in animation
        var fade= document.createElement('a-animation');
        fade.setAttribute('attribute','opacity');
        fade.setAttribute('dur','500');
        fade.setAttribute('from','0');
        fade.setAttribute('to','1');

        /*This function is called when the user hovers over the image of a wireframe cube.
        It creates the wireframe cube, set its class to "wireframe", adds it to the scene,
        and make it fade-in and zoom-in.*/

        var makeCube = function(){

            //If another entity with a class of "wireframe" exits, delete it.

            var existing = document.querySelector('.wireframe');
                if(existing){existing.parentNode.removeChild(existing);} 

            var cube = document.createElement('a-box');
            cube.setAttribute('position', '0 0 -20');
            cube.setAttribute('color', 'black');
            cube.setAttribute('opacity', '0');
            cube.setAttribute('wireframe', true);
            cube.setAttribute('class', 'wireframe');
            mesh.appendChild(cube);
            cube.appendChild(zoom);
            cube.appendChild(fade);
        }

        //Exact same as the makeCube function, except that it is making a sphere
        var makeSphere= function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var sphere = document.createElement('a-sphere');
            sphere.setAttribute('position', '0 0 0');
            sphere.setAttribute('color', 'black');
            sphere.setAttribute('opacity', '0');
            sphere.setAttribute('segments-height', '12');
            sphere.setAttribute('segments-width', '12');
            sphere.setAttribute('scale', '0.65 0.65 0.65');
            sphere.setAttribute('wireframe', true);
            sphere.setAttribute('class', 'wireframe');
            mesh.appendChild(sphere);
            sphere.appendChild(zoom);
            sphere.appendChild(fade);
        }

        //Exact same as the makeCube function, except that it is making a cone
        var makeCone = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var cone = document.createElement('a-cone');
            cone.setAttribute('segments-height', '6');
            cone.setAttribute('segments-radial', '12');
            cone.setAttribute('position', '0 0 0');
            cone.setAttribute('color', 'black');
            cone.setAttribute('opacity', '0');
            cone.setAttribute('wireframe', true);
            cone.setAttribute('class', 'wireframe');
            mesh.appendChild(cone);
            cone.appendChild(zoom);
            cone.appendChild(fade);          
        }

        //Exact same as the makeCube function, except that it is making a torus
        var makeTorus = function(){
            var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var torus = document.createElement('a-torus');
            torus.setAttribute('position', '0 0 0');
            torus.setAttribute('segments-radial', 12);
            torus.setAttribute('segments-tubular', 8);
            torus.setAttribute('color', 'black');
            torus.setAttribute('rotation', '0 0 0');
            torus.setAttribute('opacity', '0');
            torus.setAttribute('scale','0.5 0.5 0.5');
            torus.setAttribute('wireframe', true);
            torus.setAttribute('class', 'wireframe');
            mesh.appendChild(torus);
            torus.appendChild(zoom);
            torus.appendChild(fade);
        }

        //Exact same as the makeCube function, except that it is making a cylinder
       var makeCylinder = function(){
        var existing = document.querySelector('.wireframe');
                if(existing){
                    existing.parentNode.removeChild(existing);
                }
            var cylinder = document.createElement('a-cylinder');
            cylinder.setAttribute('segments-height', '6');
            cylinder.setAttribute('segments-radial', '12');
            cylinder.setAttribute('position', '0 0 0');
            cylinder.setAttribute('scale', '0.6 1.2 0.6');
            cylinder.setAttribute('color', 'black');
            cylinder.setAttribute('opacity', '0');
            cylinder.setAttribute('wireframe', true);
            cylinder.setAttribute('class', 'wireframe');
            mesh.appendChild(cylinder);
            cylinder.appendChild(zoom);
            cylinder.appendChild(fade);
           
       }

       /*This is the function that is called when you click to choose a geometry. It does
       quite a lot (including acting as a remove function), and should probably be seperated
       into different reusable components or functions*/

       var getMaterials = function(){

        //Remove this component from the grid-button as soon as this function is called
        el.removeAttribute('make-primitives');
        el.setAttribute('visible',false);

        //Remove the event listeners from all the geometry buttons in the button grid
        var wireframe = document.querySelector('.wireframe');
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

        //Create the scale handles and add them to the scaleHandles entity in the container hierarchy
        var width = document.createElement('a-gltf-model'); 
        width.setAttribute('src','#arrow-blue');
        width.setAttribute('class', 'manipulator');
        width.setAttribute('id', 'handleImgX');
        width.setAttribute('position', '0.6 0 0');
        width.setAttribute('rotation','0 0 -90');
        width.setAttribute('scale','0.25 0.25 0.25');
        scaleHandles.appendChild(width);

        var height = document.createElement('a-gltf-model');
        height.setAttribute('src','#arrow-green');
        height.setAttribute('class', 'manipulator');
        height.setAttribute('id', 'handleImgY');
        height.setAttribute('position', '0 0.6 0');
        height.setAttribute('scale','0.25 0.25 0.25');
        scaleHandles.appendChild(height);

        var depth = document.createElement('a-gltf-model');
        depth.setAttribute('src','#arrow-red');
        depth.setAttribute('class', 'manipulator');
        depth.setAttribute('id', 'handleImgZ');
        depth.setAttribute('position', '0 0 0.6');
        depth.setAttribute('rotation','90 0 0');
        depth.setAttribute('scale','0.25 0.25 0.25');
        scaleHandles.appendChild(depth);

        //Create the rotation handles and add them to the rotHandles entity in the container hierarchy

        var xRot = document.createElement('a-gltf-model');
        xRot.setAttribute('src','#coin-green');
        xRot.setAttribute('class', 'manipulator');
        xRot.setAttribute('id', 'rotHandleImgX');
        xRot.setAttribute('position', '0.18 0 0');
        xRot.setAttribute('rotation','0 0 -90');
        xRot.setAttribute('model-opacity','0.7');
        xRot.setAttribute('scale','0.4 0.4 0.4');
        rotHandles.appendChild(xRot);

        var yRot = document.createElement('a-gltf-model');
        yRot.setAttribute('src','#coin-blue');
        yRot.setAttribute('class', 'manipulator');
        yRot.setAttribute('id', 'rotHandleImgY');
        yRot.setAttribute('position', '0 0.6 0');
        yRot.setAttribute('model-opacity','0.7');
        yRot.setAttribute('scale','0.25 0.25 0.25');
        rotHandles.appendChild(yRot);

        var zRot = document.createElement('a-gltf-model');
        zRot.setAttribute('src','#coin-red');
        zRot.setAttribute('class', 'manipulator');
        zRot.setAttribute('id', 'rotHandleImgZ');
        zRot.setAttribute('position', '0 0 0.6');
        zRot.setAttribute('rotation','90 0 0');
        zRot.setAttribute('model-opacity','0.7');
        zRot.setAttribute('scale','0.25 0.25 0.25');
        rotHandles.appendChild(zRot);

        //Create a new buttonGrid for the materials

        var materialGrid = document.createElement('a-entity');
        materialGrid.setAttribute('gridify-buttons',"class: color-picker-buttons; btnCount: 12; btnWidth: 1;  columns: 3; btnHeight: 1; spacing: 0.1; normals:true; url:assets/buttons/materialBtns/; imagebase: material");
        materialGrid.setAttribute('id',"colorGrid");
        materialGrid.setAttribute('class',"button");
        materialGrid.setAttribute('position', "1 3 -10");
        materialGrid.setAttribute('scale', "0.5 0.5 0.5");

        //Create a zoom-in effect for the material buttonGrid

        var zoomIn = document.createElement('a-animation');
        zoomIn.setAttribute('attribute', 'position');
        zoomIn.setAttribute('from', '1 3 -10');
        zoomIn.setAttribute('to', '1 3 -3');
        zoomIn.setAttribute('dur', '500');


        /*Make the material buttonGrid zoom into the scene, add the "color-button-caller"
        component to it, and remove the geometry buttonGrid from the scene*/

        scene.appendChild(materialGrid);
        materialGrid.appendChild(zoomIn);
        materialGrid.setAttribute('color-button-caller', {});
        scene.removeChild(el);
       }

       //Add the event listeners to the geometry buttons

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

