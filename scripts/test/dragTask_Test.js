import {t} from 'testcafe'  //t es el test controller que se tiene que importar para usar sus metodos
import landingPage from '../pages/landingPage' //Se importan las paginas que se van a usar
import homePage from '../pages/homePage'
import { BASE_URL, USER, PASS, TASK_NAME,TASK_NAME_EDITED} from '../utils/inputData.js'

fixture('Successful login')  //Aqui le das el nombre a tu grupo de pruebas
    .page(BASE_URL)  //le dices en que pagina vas a trabajar poniendo la url

test('Login',async t =>{
    await landingPage.LoginFlow(USER,PASS)
    await t.expect(homePage.topIcons.exists).ok()
    await t.click(homePage.BandejaButton)
    await homePage.DragTaskFlow()
    

})
