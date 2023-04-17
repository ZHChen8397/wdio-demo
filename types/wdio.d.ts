declare global {
  namespace WebdriverIO {
    interface Browser {
      clickEnter: () => Promise<void>;
      waitForPageChange: (string, number?, string?) => Promise<void>;
      selectByDataID: (string) => Promise<WebdriverIO.Element>;
      selectMultiByDataID: (string) => Promise<WebdriverIO.Element[]>;
    }

    interface Element {
      scrollAndGetText: (allowEmpty?: boolean) => Promise<string>;
      selectByDataID: (string) => Promise<WebdriverIO.Element>;
      selectMultiByDataID: (string) => Promise<WebdriverIO.Element[]>;
      waitAndClick: (number?) => Promise<None>;
    }
  }
}
