import {test, expect} from '@playwright/test';
import {PageManager} from "../page-objects/pageManager";

test.beforeEach(async ({page}) => {
    await page.goto("https://dev.commanderservices.eu/")
})

test('Login', async ({page}) => {
    const pm = new PageManager(page)

    const username = 'SingleTestTest'
    const password = 'Test1234'

    await pm.logInToSystem(username, password)

    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToCostsOverview()
    await pm.navigateToSuppliers()
    await pm.navigateToCostTypes()
    await pm.navigateToVehicleGroups()
    await pm.navigateToPeriodLock()
    await pm.navigateToVehicleGroups()

    await pm.navigateToVehicleGroups()
    await pm.navigateToVehicleGroups()

    await pm.navigateToVehicleGroups()
    await pm.navigateToVehicleGroups()
    await pm.navigateToVehicleGroups()








});
