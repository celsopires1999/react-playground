```
docker-compose up -d --build --force-recreate --no-deps

docker-compose exec app bash

if react is not installed
    npx create-react-app frontend --template typescript 
else
    npm install
end-if

cd frontend 

npm start
```
