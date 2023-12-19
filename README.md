# React Native

### [Website](https://reactnative.dev/)

#### [Expo Doc](https://docs.expo.dev/)

![React & React Native](./images/2023-12-15-09-55-20.png)

#### Project Setup (Using EXPO):

```bash
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start
```

- In order to preview the app you need to install the Expo Go app on your phone.
    - Then scan the qr code generated in the cli with your camera in order to view the app.

---
---

## Basics of React Native:

- In normal React we have the DOM in the browser which supports html elements like a `<div/>` ... The native components for android and IOS do not support html elements...

![Component Compilation](./images/2023-12-19-12-41-33.png)

#### [Core Components](https://reactnative.dev/docs/components-and-apis)


- There also are not any css files... you can style components with inline styles or stylesheet objets.
- This is written in Javascript and mimics css syntax but only suports a subset of the properties and features of css.


- In normal react for html, text between elements is ok... i.e. `<div>This is some text </div>`, however, this will not work in React Native... text must go inside of a `<Text>Hello World!!!!</Text>` element. 


