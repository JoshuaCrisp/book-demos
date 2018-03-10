AFRAME.registerComponent('geometry-button-caller', {
    schema: {
    
    },

    init: function () {
        var el = this.el;
        var scene = document.querySelector('#scene');

        if(tutAdd){
            tutAdd = false;
            var jay = document.querySelector("#jayModel");
            jay.setAttribute('sound',"src: #add; autoplay: false;");
            jay.components.sound.playSound();
        }
        
       
        var getButtons = function(){
            scene.removeAttribute('add-button-caller');
            if(tutGeo){
                tutGeo = false;
                jay.setAttribute('sound',"src: #geometry; autoplay: false;");
                jay.setAttribute('animation-mixer','clip: talking;');
                jay.components.sound.playSound();
            }
            
            el.removeEventListener('mouseenter',getButtons);
            var geobtngrid = document.createElement('a-entity');
            geobtngrid.setAttribute('gridify-buttons',"class: geometry-button; btnCount: 5; btnWidth: 1;  columns: 2; btnHeight: 1; spacing: 0.1; url:assets/buttons/geometryBtns/; imagebase: geometryButton");
            geobtngrid.setAttribute('class', 'button');
            geobtngrid.setAttribute('position', '4 1.273 -5');
            geobtngrid.setAttribute('scale','0.8 0.8 0.8');
            geobtngrid.setAttribute('make-primitives',{});
            scene.appendChild(geobtngrid);
        }

        el.addEventListener('click', getButtons); 

    }


});