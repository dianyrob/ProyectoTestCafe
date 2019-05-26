import {Selector, t} from 'testcafe'

class LandingPage {
    constructor(){
        //Se definen los objetos de la pagina que se van a utilizar
        this.loginLink=Selector('.sel_login')    //. is for class
        this.loginIframe=Selector('.GB_frame')   //# is for id
        this.loginIframeNested=Selector('#GB_frame')  //in this case you can use "[name='GB_frame']" and is the same
        this.loginEmailInput=Selector('#email')
        this.loginPasswordInput=Selector('#password')
        this.loginButton=Selector('.submit_btn')
        
    }

    LoginFlow = async (user='',pass='') => {
        await t
            .click(this.loginLink)
            .switchToIframe(this.loginIframe)
            .switchToIframe(this.loginIframeNested)
            .typeText(this.loginEmailInput,user, { replace: true })
            .typeText(this.loginPasswordInput,pass, { replace: true })
            .click(this.loginButton)
            .switchToMainWindow()   //te regresa a los elementos raiz de la pagina
    }
}
export default new LandingPage()  //Se declara esta linea para cuando se importe este archivo en otro lado sea la clase de landing page
//Si quieres exportar otras clases pondiras export new nombreDeClase() y cada clase deberia tener su constructor