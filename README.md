# A Node JS URL Shortener API

> An API developed using Node JS, Express JS to shorten URLs with an option of expiration

## Replicate & Usage

- Clone the repository
```
 git clone https://github.com/xosteve26/UrlShortener.git
 ```

- Install the necessary dependencies thorugh:
```
npm install
```

- Create a `.env` file in the root directory.
- Within the `.env` file create a variable called `MONGO_URI` and paste in your MONGO DB Atlas connection string.
- Run the `npm run start` command
- Open up your browser to access the server thorugh `http://localhost:5000`.

## Routes

#### Route to shrink url:
```
@route: /api/url/shrink
@method: POST
@desc: To shrink the url
```


Fields in the request body:

- "longUrl" - The url that needs to br shrunk [Value Data type: String]  [Required]
- "expiration" - The number of seconds the url needs to live [Value Data type: Integer] [Optional]

```
Sample Request Body:

    With Url expiration:
        {
            "longUrl":"https://excalidraw.com/",
            "expiration":10
        }
    Without Url expiration:
        {
            "longUrl":"https://excalidraw.com/",
        }
```

```
Sample Response:

    With url expiration:
        {
            "urlCode": "JaOlA0evY",
            "longUrl": "https://excalidraw.com/",
            "shortUrl": "http://localhost:5000/JaOlA0evY",
            "createdAt": "2022-05-13T06:19:32.311Z",
            "expireAt": "2022-05-13T06:19:42.311Z",
            "_id": "627df874e54b1ed1c075f828",
            "__v": 0
        }

    Without url expiration:
        {
            "urlCode": "9fqtZ5QhA",
            "longUrl": "https://google.com",
            "shortUrl": "http://localhost:5000/9fqtZ5QhA",
            "createdAt": "2022-05-13T06:31:42.745Z",
            "_id": "627dfb4e5b87ee6879bb7fd0",
            "__v": 0
        }

```


#### Route to access the shortened url:
```
//@route GET /:code
//@desc Redirect to long/original url
```

By pasting the value of the "shortUrl" from the response body, the required site can be accessed.


