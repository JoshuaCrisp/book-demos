AFRAME.registerComponent('geometry-button-caller', {
    schema: {
    
    },

    init: function () {
        var el = this.el;
        var data = this.data;
        console.log(el);
        var jay = document.querySelector("#jayModel");
        console.log()
            jay.setAttribute('sound',"src: #add; autoplay: false;");
            jay.components.sound.playSound();
       
        var getButtons = function(){
            jay.setAttribute('sound',"src: #geometry; autoplay: false;");
            jay.components.sound.playSound();
            console.log("added");
            el.removeEventListener('mouseenter',getButtons);
            var geobtngrid = document.querySelector('#geoButtonGrid');
            geobtngrid.setAttribute('make-primitives',{});
            geobtngrid.setAttribute('visible', true);
            el.removeAttribute('geometry-button-caller');
            

        }

        el.addEventListener('mouseenter', getButtons); 

    }


});