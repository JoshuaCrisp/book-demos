AFRAME.registerComponent('geometry-button-caller', {
    schema: {
    
    },

    init: function () {
        var el = this.el;
        var data = this.data;
        var jay = document.querySelector("#jayModel");
            jay.setAttribute('sound',"src: #add; autoplay: false;");
            
            jay.components.sound.playSound();
       
        var getButtons = function(){
            jay.setAttribute('sound',"src: #geometry; autoplay: false;");
            jay.setAttribute('animation-mixer','clip: talking;');
            jay.components.sound.playSound();
            console.log("added");
            el.removeEventListener('mouseenter',getButtons);
            var geobtngrid = document.createElement('a-entity');
            geobtngrid.setAttribute('gridify-buttons',"class: geometry-button; btnCount: 5; btnWidth: 1;  columns: 2; btnHeight: 1; spacing: 0.1; url:assets/buttons/geometryBtns/; imagebase: geometryButton");
            geobtngrid.setAttribute('class', 'button');
            geobtngrid.setAttribute('position', '4 1.273 -5');
            geobtngrid.setAttribute('scale','0.8 0.8 0.8');
            geobtngrid.setAttribute('make-primitives',{});
            scene.appendChild(geobtngrid);
            var addBtn = document.querySelector('#addBtn');
            addBtn.setAttribute('visible', false);
            el.removeAttribute('geometry-button-caller');
        }

        el.addEventListener('click', getButtons); 

    }


});