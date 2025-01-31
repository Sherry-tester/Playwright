//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'
test('multi',async ({page})=>{

await page.goto('https://demoblaze.com/')

//await page.locator('id=login2').click();
//await page.click('id=login2')
const links =await page.$$('a');
//await page.locator('#loginusername').fill("sherry")
/*const links =await page.$$('a');
for(const link of links )
{
    const linktext= await link.textContent();
    console.log(linktext);
}*/
page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

const products= await page.$$("//div[@id='tbodyid']//div//h4/a")
for(const product of products)
{
const prodName = await product.textContent();
console.log(prodName);

}



//await page.fill('#loginusername')
//await page.type('#loginusername','pavanol')


//await page.type('#loginpassword','test@123')

//await page.click("//button[normalize-space()='Log in']")

//const logoutLink= await page.locator("//a[normalize-space()='Log out']")
//await expect(logoutLink).toBeVisible();

//await page.close()


})