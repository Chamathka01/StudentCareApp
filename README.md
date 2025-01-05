# StudentCareApp


## 2020ICT57


This project is a simple mobile application built using React Native and React Navigation. It is designed to display different screens such as "Home," "Contact Us," and "About Us," with the ability to navigate between these screens. The app features smooth navigation, form input handling, and text-based content, and it incorporates elements from React Native Paper for UI components. The application provides a basic structure for building and navigating through different sections of a mobile app.


## Project Overview

### Files
- **App.js**: This is the main entry point for the app. It sets up the navigation container and the stack navigator. 
- **Home.js**:  Displays the home screen with introductory content.Includes two buttons that navigate to the "Contact Us" and "About Us" screens.
- **ContactUs.js**: Displays the contact form, where users can input their name, email, phone number, and message.
- **AboutUs.js**: Displays information about the University of Vavuniya, including its history and background.


## Features

- **Multiple Screens**: The app includes three main screens: Home, Contact Us, and About Us. Each screen displays different content and functionality.

- **Navigation**: Users can navigate between screens using React Navigation's stack navigation. Buttons are provided to move between the screens.

- **Form Handling in Contact Us**: The Contact Us screen allows users to input their details, including name, email, phone number, and a message. The app updates the state using the useState hook for each input field.

- **Responsive Design**: The app uses KeyboardAvoidingView to adjust the UI when the keyboard is displayed, ensuring a smooth user experience when interacting with text fields.

- **UI Components**: The app uses React Native Paper components such as Text, TextInput, Button, and Divider to create a clean, consistent UI.

- **ScrollView**: A ScrollView is used on multiple screens (Home, Contact Us, and About Us) to ensure that content can be scrolled if it exceeds the available screen space.

- **Cross-Platform Compatibility**: The app is compatible with both iOS and Android, with platform-specific adjustments made using the Platform API (e.g., adjusting the keyboard behavior).

- **Footer**: Each screen includes a footer with the text "MyApp © 2024," providing a simple branding element at the bottom.


## Technologies Used

- **React Native**:  Framework for building cross-platform mobile applications for iOS and Android using JavaScript and React.

- **React Navigation**: Library for handling navigation between screens in the app.

- **React Native Paper**:  A UI library for React Native, offering pre-designed components like TextInput, Button, Text, Divider, and more.

- **KeyboardAvoidingView**: Helps handle the keyboard's behavior to prevent it from overlapping the UI when input fields are focused.

- **Platform**: Used to determine whether the app is running on iOS or Android and adjust the UI accordingly.

- **State Management (useState)**: React Hook to manage the state of form inputs and navigation.


## Project Structure

```

├── components
│   ├── ContactUs.js       # contactus component
│   ├── AboutUs.js         # About Us component
│   ├── Home.js            # Home component
├── App.js                 # Root component
├── assets
│   └── images             # Images of the app
├── package.json           # Project configuration
├── README.md              # Documentation

```

## How to Run

1. Creates a new Expo project named mobileApp using the blank template.
    ```bash
    npx create-expo-app mobileApp --template blank
    ```


2. Changes the current directory to the newly created mobileApp project directory.
   ```bash
   cd mobileApp
   ```


3. Installs dependencies required for running the app on the web using Expo.
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```


4. Start the development server
   ```bash
   npx expo start
   ```
   or

   To run the app if mobile and pc have different network or virtual environment (use tunnel mode)

   ```bash
   npx expo start --tunnel
    ```


5.  Open in a web browser

    type "w"

     ```bash
    w
    ```


6. Installs the React Native Paper library.(This is a UI component library that provides Material Design components for React Native.)
    ```bash
    npm install react-native-paper
    ```


7. Installs the react-native-safe-area-context library.(This library manage safe areas in a React Native app.)
    ```bash
    npm install react-native-safe-area-context
    ```

    
8. Installs the react-native-vector-icons library.(This provides customizable icons to use within the app.)
    ```bash
    npm install react-native-vector-icons
    ```

  