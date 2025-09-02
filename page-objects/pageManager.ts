import {Page} from 'playwright/test';
import {LoginPage} from "./loginPage";
import {Navigation} from "./pageNavigation";

export class PageManager {

    private readonly page: Page;
    private readonly login: LoginPage;
    private readonly navigation: Navigation;

    constructor(page: Page) {
        this.page = page;
        this.login = new LoginPage(this.page);
        this.navigation = new Navigation(this.page);
    }

    navigateToMap() {
        return this.navigation.navigateToMap()
    }

    navigateToRideBook() {
        return this.navigation.navigateToRideBook()
    }

    navigateToAlarms() {
        return this.navigation.navigateToAlarms()
    }

    navigateToManualReports() {
        return this.navigation.navigateToManualReports()
    }

    navigateToAutomaticReports() {
        return this.navigation.navigateToAutomaticReports()
    }

    navigateToRefuelingsOverview() {
        return this.navigation.navigateToRefuelingsOverview()
    }

    navigateToFuelCards() {
        return this.navigation.navigateToFuelCards()
    }

    navigateToCostsOverview() {
        return this.navigation.navigateToCostsOverview()
    }

    navigateToCostTypes() {
        return this.navigation.navigateToCostTypes()
    }

    navigateToSuppliers() {
        return this.navigation.navigateToSuppliers()
    }

    navigateToFileImport() {
        return this.navigation.navigateToFileImport()
    }

    navigateToCorrections() {
        return this.navigation.navigateToCorrections()
    }

    navigateToBluecoins() {
        return this.navigation.navigateToBluecoins()
    }

    navigateToVehicles() {
        return this.navigation.navigateToVehicles()
    }

    navigateToVehicleGroups() {
        return this.navigation.navigateToVehicleGroups()
    }

    navigateToEmployees() {
        return this.navigation.navigateToEmployees()
    }

    navigateToCodebook() {
        return this.navigation.navigateToCodebook()
    }

    navigateToPeriodLock() {
        return this.navigation.navigateToPeriodLock()
    }

    navigateToOnlinePanel() {
        return this.navigation.navigateToOnlinePanel()
    }

    navigateToGDPRUsers() {
        return this.navigation.navigateToGDPRUsers()
    }

    navigateToGDPRProfiles() {
        return this.navigation.navigateToGDPRProfiles()
    }

    logInToSystem(username: string, password: string) {
        return this.login.login(username, password)
    }

    async waitForNumberOfSeconds(seconds: number) {
        return this.page.waitForTimeout(seconds * 1000)
    }
}