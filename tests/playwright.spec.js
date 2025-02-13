const { test, expect } = require('@playwright/test')

import { LoginPage } from '../pages/loginPage.js'
import { DashboardPage } from '../pages/dashboardPage.js'


test.beforeEach(async ({page}) => {
          
          await page.goto('/')

})

test.describe('Login ', () => {

     test('Successful Login', async ({ page }) => {

          const login = new LoginPage(page)
          const dashboard = new DashboardPage(page)
        
    
          await login.loginWithUser()
          await dashboard.checkDashboardPage() 
    })
    
     test('Fail Login', async ({ page }) => {
       
          const login = new LoginPage(page)
        
          await login.loginWrongCredentials()

    })

     test('with no Credentials', async ({ page }) => {
        
          const login = new LoginPage(page)
     
          await login.loginNoCredentials()

    })

   
})