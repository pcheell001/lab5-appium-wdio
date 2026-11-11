# Лабораторна робота №5 — Appium 2.0 + WebdriverIO v8

## Мета
Ознайомитись з методикою роботи з Appium та WebdriverIO для тестування Android-застосунків.

## Додаток
`app/ApiDemos-debug.apk` — файл, наданий у матеріалах лабораторної.
Пакет Android: `io.appium.android.apis`.

## Завдання
1. Відкрити **Views → Auto Complete → 1. Screen Top**.
2. Знайти поле кількома стратегіями: Accessibility ID, UIAutomator, XPath, ID, className.
3. Ввести назву країни `Ukraine` і перевірити її через assert.
4. Протестувати **Animation** та **App**.

## Попередні вимоги
- Windows 10/11
- Android Studio + SDK + Android Emulator (рекомендовано Android 13 API 33, x86_64)
- JAVA_HOME та ANDROID_HOME
- Node.js/npm

## Встановлення
У кореневій теці проєкту:

```powershell
npm.cmd install
npx.cmd appium driver install uiautomator2@4.2.9
npx.cmd appium driver list --installed
npx.cmd appium driver doctor uiautomator2
```

Увімкніть Android Emulator в Android Studio та перевірте, що `adb devices` відображає `device`.

## Запуск
Перший термінал (залишити відкритим):

```powershell
npm.cmd run appium
```

Другий термінал:

```powershell
npm.cmd test
```

Тести виконуються на одному локальному Android-емуляторі. У `wdio.conf.js` налаштовано порт 4723 та локальний APK.

## Важливо
Тестовий код перевірено на коректність JavaScript-синтаксису, але повний запуск в Android Emulator потребує Windows-машини із встановленими Android SDK/Appium.

## Команди перевірки

```powershell
node --check .\wdio.conf.js
node --check .\test\specs\apidemos.spec.js
npm.cmd test
```
