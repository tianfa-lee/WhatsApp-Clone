# WhatsApp MVP
![GitHub](https://camo.githubusercontent.com/ee2de4be68db65d60cde7c99761d493c1d2b35dab5d8675a3dcbd0f776022de1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6564756172646f7a6f2f77686174736170702d6d65726e3f7374796c653d666c6174)

This build replicates the WhatsApp web-app UI & UX design. Users can login with Google Authentication and interact with other chatRoom users in realtime.

**Technologies used:**
* MongoDB
* Express
* React
* Node
* Axios
* Firebase (Google Authentication)
* Material UI
* Pusher (WebSocket)
* React Router (Single Page Application) and Context API 

**Features**
* Login with Google Authentication
* Create new chat group
* Search for chat group
* Send and receive message in real-time

### Steps 

*** 

* Go to https://messagingapp-mern.herokuapp.com/ and login with your Google account

* Create new chat group

* In chat group, send and receive messages in real-time

### Project Directory (excluding node modules)

*** 

```bash
.WhatsApp MVP
|   .env_sample # rename to .env and add your API configuration
|   .gitignore
|   LICENSE
|   package-lock.json
|   package.json
|   README.md
|   server.js
|
+---model
|       db.chatRooms.js
|
\---whatsapp-frontend
    |   .env_sample # rename to .env and add your API configuration
    |   .gitignore
    |   package-lock.json
    |   package.json
    |
    +---public
    |       index.html
    |       manifest.json
    |       robots.txt
    |       whatsapp-icon.svg
    |
    \---src
        |   App.css
        |   App.js
        |   index.css
        |   index.js
        |   serviceWorker.js
        |
        +---components
        |   +---Chat
        |   |       Chat.css
        |   |       Chat.js
        |   |
        |   +---Login
        |   |       Login.css
        |   |       Login.js
        |   |
        |   +---Modal
        |   |       DemoDialog.js
        |   |
        |   +---Sidebar
        |   |       Sidebar.css
        |   |       Sidebar.js
        |   |
        |   \---SidebarChat
        |           SidebarChat.css
        |           SidebarChat.js
        |

        +---config
        |       axios.js
        |       firebase.js
        |
        \---reducer
                Reducer.js
                StateProvider.js


```

### Screenshots

***

* Login Page

  ![Login Page](https://i.ibb.co/YhYqTn7/Login-Page.png)

* Chat Page

  ![Chat Page](https://i.ibb.co/z8cT7n0/Chat-Page.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

