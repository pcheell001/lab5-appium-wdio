
const APP_PACKAGE = 'io.appium.android.apis';

const MAIN_ACTIVITY =
  'io.appium.android.apis.ApiDemos';

describe('ЛР5: Android API Demos (Appium 2 + WDIO 8)', () => {

  // Перед каждым тестом открываем главный экран
  beforeEach(async () => {

    await driver.execute('mobile: startActivity', {
      component: `${APP_PACKAGE}/${MAIN_ACTIVITY}`,
      stop: true,
      wait: true
    });

    await expect($('~Views')).toBeDisplayed();
  });

  // ТЕСТ №1
  it('Views → Auto Complete → 1. Screen Top: ввод страны', async () => {

    // Стратегия 1: Accessibility ID
    await $('~Views').click();

    // Стратегия 2: Android UIAutomator
    await $('android=new UiSelector().text("Auto Complete")')
      .click();

    // Стратегия 3: XPath
    await $('//android.widget.TextView[@text="1. Screen Top"]')
      .click();

    // Стратегия 4: Resource ID
    const inputById = await $(
      'id=io.appium.android.apis:id/edit'
    );

    await expect(inputById).toBeDisplayed();

    // Поиск по имени класса
    const inputByClass = await $(
      'android=new UiSelector().className("android.widget.AutoCompleteTextView")'
    );

    // Поиск через XPath с resource-id
    const inputByXPath = await $(
      '//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]'
    );

    await expect(inputByClass).toBeDisplayed();
    await expect(inputByXPath).toBeDisplayed();

    // Вводим название страны
    const country = 'Ukraine';

    await inputById.setValue(country);

    // Проверяем введённый текст
    await expect(inputById).toHaveText(country);
    await expect(inputByXPath).toHaveText(country);

  });

  // ТЕСТ №2
  it('Дополнительный пункт меню: Animation', async () => {

    await $('~Animation').click();

    await expect(
      $('android=new UiSelector().text("Bouncing Balls")')
    ).toBeDisplayed();

  });

  // ТЕСТ №3
  it('Дополнительный пункт меню: App', async () => {

    await $('~App').click();

    await expect(
      $('android=new UiSelector().text("Alert Dialogs")')
    ).toBeDisplayed();

  });

});
