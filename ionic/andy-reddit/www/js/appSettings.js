angular.module("redditApp").value("appSettings", {
    channels:{
        internet: "https://www.reddit.com/r/internet/.json",
        internetIsBeautiful: "https://www.reddit.com/r/InternetIsBeautiful/.json",
        askReddit:"https://www.reddit.com/r/AskReddit/.json",
        news:"https://www.reddit.com/r/worldnews/new/.json"
    }
})