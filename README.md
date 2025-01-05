# Student Care App


## 2020ICT57


This project is a mobile app built using React Native for a student management system. The application provides students with a platform to view their profile, courses, and subjects. It offers a login system for authentication and displays relevant information for each student, such as their personal details, course information, and academic performance. 


## Project Overview

### Files
- **App.js**: Sets up the root navigation structure of the application. 
- **Login.js**:  Handles the student login functionality.
- **Profile.js**: Displays the student's profile information after successful login.
- **Course.js**: Displays information about a specific course.
- **Students.js**: Allows students to input and view their subject names and marks.


## Features

- **User Authentication**: The login screen allows students to sign in using their credentials. 

- **Profile Management**: Once logged in, students can view their personal information, contact details, and profile picture.

- **Course Information**: Displays details about a specific course, such as name, code, department, and description.

- **Subject Management**: Allows students to add subjects and marks, and calculates the average of all marks entered.

- **Navigation**: Utilizes React Navigation to navigate between different sections like login, profile, courses, and subjects.

- **Mobile-first Design**: The app is designed to be responsive on mobile devices with easy-to-read text, buttons, and form inputs.



## Technologies Used

- **React Native**:  A framework for building mobile applications using JavaScript and React.

- **React Navigation**: Used for handling screen navigation within the app.

- **React Native Paper**:  A library of components that follow Material Design guidelines for building user interfaces.

- **Expo**: An open-source platform for React Native development

- **StyleSheet**: React Native’s built-in styling solution for consistent and scalable UI styling.



## Project Structure

```

├── components
│   ├── Login.js             # Login screen component where students enter their credentials
│   ├── Profile.js           # Profile screen component displaying student information
│   ├── Course.js            # Course information screen component
│   ├── Subjects.js          # Subject and marks input and display component
├── assets
│   └── profilepic           # Images used in the app (e.g., logos, profile pictures)
├── App.js                   # Root component that sets up navigation and routing
├── data
│   └── StudentsDb.js        # A mock database of student data (e.g., usernames, passwords, profiles)
├── package.json             # Project dependencies and configuration
├── README.md                # Documentation for the project, describing its functionality and setup


```

## How to Run

1. Creates a new Expo project named StudentCareApp using the blank template.
    ```bash
    npx create-expo-app StudentCareApp --template blank
    ```


2. Changes the current directory to the newly created StudentCareApp project directory.
   ```bash
   cd StudentCareApp
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

  