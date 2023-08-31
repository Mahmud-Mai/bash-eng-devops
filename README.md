"Farm Direct" is a platform that lists available bulk farm produce for sale. Interested buyers can place their orders and we'll contact them to fulfull those.

## Project Set up Instructions

Here are the instructions on how to set up and run the Next.js app in your computer.

1. Open a terminal.

- On Windows, open the Command Prompt.
- On macOS, open Terminal.
- On Linux, open a terminal window.

2. Check if Node.js is already installed and the version is up to date. You can paste run this command in the terminal.

```
node -v
```

If the output is something like `v14.17.1`, then Node.js is already installed and you can skip to the next step. If the output is something like `command not found`, then you need to install Node.js.

To install Node.js on Windows, go to the Node.js website: https://nodejs.org/en/download/ and download the installer. Run the installer and follow the instructions.

To install Node.js on macOS, open a terminal window and run the following command:

```
brew install node
```

To install Node.js on Linux, open a terminal window and run the following command:

```
sudo apt-get install nodejs
```

3. (Optional) Install Visual Studio Code.

Visual Studio Code is a popular text editor that is used for coding. It is not required to set up and run the Next.js app, you are free to use any other editor of your choice, but it is recommended. To install Visual Studio Code, go to the Visual Studio Code website: https://code.visualstudio.com/ and download the installer. Run the installer and follow the instructions.

4. Navigate to a suitable directory.

The next step is to navigate to a directory where you want to clone the repository. For example, you can create a new directory called `agri-market` on you desktop or any other place and navigate to it using the following commands:

```
mkdir agri-market
cd agri-market
```

5. Clone the repository.

Assuming you've already set up your github account.
You can clone the repository using the following command:

```
git clone git@github.com:Mahmud-Mai/agri-market.git
```

6. Install the dependencies.

Once the repository is cloned, you need to install the dependencies. To do this, run the following command:

```
npm install
```

7. Run the development server.

Finally, you can run the development server by running the following command:

```
npm run dev
```

This will start the development server on port 3000. You can access the app by opening http://localhost:3000 in your browser.

To see changes:
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
