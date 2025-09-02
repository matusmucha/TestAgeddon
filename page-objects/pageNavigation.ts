import {Page, expect} from "playwright/test";
import {HelperBase} from "./helperBase";

export class Navigation extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    /**
     * Check if submenu is visible and if not, click on main item to open submenu
     * @param subItem - testid submenu itemu
     * @param mainItem - testid main itemu
     */


    async subMenuIsVisible(subItem: any, mainItem: any) {
        if (await subItem.isVisible() === true) {
            await this.page.waitForTimeout(500)
            await subItem.click()
        } else {
            await mainItem.click()
            await this.page.waitForTimeout(500)
            await subItem.click()
        }
    }

    async navigateToMap() {
        await this.page.getByTestId('menu-item-map').click()
    }

    async navigateToRideBook() {
        await this.page.getByTestId('menu-item-rideBook').click()
    }

    async navigateToAlarms() {
        await this.page.getByTestId('menu-item-alarms').click()
    }

    async navigateToManualReports() {
        const subItem = this.page.getByTestId('menu-item-reports-submenu-item-manualReports')
        const mainItem = this.page.getByTestId('menu-item-reports')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToAutomaticReports() {
        const subItem = this.page.getByTestId('menu-item-reports-submenu-item-autoReports')
        const mainItem = this.page.getByTestId('menu-item-reports')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToRefuelingsOverview() {
        const subItem = this.page.getByTestId('menu-item-refuelings-submenu-item-refuelingsOverview')
        const mainItem = this.page.getByTestId('menu-item-refuelings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToFuelCards() {
        const subItem = this.page.getByTestId('menu-item-refuelings-submenu-item-fuelCardsOverview')
        const mainItem = this.page.getByTestId('menu-item-refuelings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToCostsOverview() {
        const subItem = this.page.getByTestId('menu-item-costs-submenu-item-costsOverview')
        const mainItem = this.page.getByTestId('menu-item-costs')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToCostTypes() {
        const subItem = this.page.getByTestId('menu-item-costs-submenu-item-expenseTypesOverview')
        const mainItem = this.page.getByTestId('menu-item-costs')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToSuppliers() {
        const subItem = this.page.getByTestId('menu-item-costs-submenu-item-suppliersOverview')
        const mainItem = this.page.getByTestId('menu-item-costs')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToFileImport() {
        await this.page.getByTestId('menu-item-expenseImports').click()
    }

    async navigateToCorrections() {
        await this.page.getByTestId('menu-item-corrections').click()
    }

    async navigateToBluecoins() {
        await this.page.getByTestId('menu-item-bluecoins').click()
    }

    async navigateToVehicles() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-carsSettings')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)//TODO: premenovat na vehicle settings
    }

    async navigateToVehicleGroups() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-carsGroupsSettings')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)//TODO: vehicle Group Settings krista
    }

    async navigateToEmployees() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-employeeSettings')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToCodebook() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-systemSettings')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToPeriodLock() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-periodLock')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToOnlinePanel() {
        const subItem = this.page.getByTestId('menu-item-settings-submenu-item-onlinePanel')
        const mainItem = this.page.getByTestId('menu-item-settings')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToGDPRUsers() {
        const subItem = this.page.getByTestId('menu-item-gdpr-submenu-item-gdprUsers')
        const mainItem = this.page.getByTestId('menu-item-gdpr')
        await this.subMenuIsVisible(subItem, mainItem)
    }

    async navigateToGDPRProfiles() {
        const subItem = this.page.getByTestId('menu-item-gdpr-submenu-item-gdprProfiles')
        const mainItem = this.page.getByTestId('menu-item-gdpr')
        await this.subMenuIsVisible(subItem, mainItem)
    }

}