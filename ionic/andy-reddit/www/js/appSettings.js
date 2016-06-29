angular.module("redditApp").value("appSettings", {
    channels: [
        {
            name: 'Internet',
            url: "https://www.reddit.com/r/internet/.json"
        },
        {
            name: 'Internet is beautiful',
            url: "https://www.reddit.com/r/InternetIsBeautiful/.json"
        },
        {
            name: 'ask Reddit',
            url: "https://www.reddit.com/r/AskReddit/.json"
        },
        {
            name: 'news',
            url: "https://www.reddit.com/r/worldnews/new/.json"
        },
    ]
})
