
# On-Demand Home Services

A web application which allows user to request househould services on their doorsteps

Live on :- nthing.vercel.app
## Run Locally

Clone the project

```bash
  git clone https://github.com/VellaInsaan/On-Demand-Home-Services.git
```

Go to the project directory


```bash
  cd project_name
```

Install dependencies

```bash
  npm install
```

Create an .env file with following details :-
```bash
MONGO_URL = mongodb+srv://username:pwd@homeservices.xyzad.mongodb.net/database_name?retryWrites=true&w=majority
ADMIN_USERNAME = YOUR_USERNAME
ADMIN_PASSWORD = YOUR_PASSWORD
TOKEN = YOUR_TOKEN //(add random alphanumeric characters)
```

Start the server

```bash
  npm run start
```

Make sure you change the api name of cloudinary from Add.jsx to your own Cloud Name 
