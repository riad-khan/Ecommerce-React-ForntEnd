import Noty from 'noty'; 
import "../../node_modules/noty/lib/noty.css";  
import '../../node_modules/noty/lib/themes/mint.css'

export const success = msg =>{
    new Noty({
        type: 'success',
        layout: 'topRight',
        text: msg,
        timeout: 2000,
    }).show();
}
export const danger = msg =>{
    new Noty({
        type: 'error',
        layout: 'topRight',
        text: msg,
        timeout: 2000,
    }).show();
}