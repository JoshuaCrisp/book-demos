AFRAME.registerComponent('look-trigger', {
    schema: { 
        hasLookedUp: {type:'boolean', default:false},
        hasLookedDown: {type:'boolean', default:false},
    },

    tick: function () {
        var el = this.el;
        var jay = document.querySelector('#jayModel');
        if(this.data.hasLookedUp == false){
           var cameraRot= el.getAttribute('rotation');
           if(cameraRot.x >= 53){
               jay.setAttribute('position', '-2 -1 -3');
               jay.setAttribute('rotation', '0 30 0');
                this.data.hasLookedUp = true;
           }
        }

        if(this.data.hasLookedUp == true && this.data.hasLookedDown == false){
            var cameraRot= el.getAttribute('rotation');
            if(cameraRot.x <= 12){
             this.data.hasLookedDown = true;
            }
         }

         if(this.data.hasLookedUp == true && this.data.hasLookedDown == true ){
             console.log('here that?');
            var btn = document.querySelector('#geo-platform');
            btn.setAttribute('geometry-button-caller',{});
            jay.removeAttribute('talk');
            el.removeAttribute('look-trigger');

        }
        


        
    }
});