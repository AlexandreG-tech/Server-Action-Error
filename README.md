# NextJS 14 ThirdwebSDK Error
This repo is a minimalist implementation of how the thirdwebSDK fails in a NextJS 14 App Router server environnement giving this [error](https://pastebin.com/tWXZSEUm).

To launch the repository :
- Go into the nextjs-blog repository with `cd nextjs-blog`
- Install the packages with `npm install`
- Run the code with `npm run dev`
- Access the page `localhost:3000/display-data`

On the page you will be met by three buttons that will each console.log the result of the same code in the console of your browser.
- Fetch data with server action -> Fails
- Fetch Data from App API route -> Fails
- Fetch Data from Pages API route -> Works

The private and secret key in the code have both been created for the occasion and are/will not be used anywhere outside this repository.
