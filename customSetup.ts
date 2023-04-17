async function waitAndClick(timeOut = 20000): Promise<void> {
    await browser.waitUntil(async () => (await this.isDisplayed()) === true, {
        timeout: timeOut,
        timeoutMsg: `Error! timeout wait for element to display`,
    });
    await browser.waitUntil(async () => (await this.isClickable()) === true, {
        timeout: timeOut,
        timeoutMsg: `Error! timeout wait for element to be clickable`,
    });
    await this.click();
}

module.exports = {
    AddBrowserCommands: () => {
        browser.addCommand('waitAndClick', waitAndClick, true);
    },
};