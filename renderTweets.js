
function renderTweets(tweets) {
    function renderTweetsHtml (obj) {
        if (obj.user.isVerified) {
        return `
            <div class="card col-9 mx-auto mb-5 mt-5 shadow" style="padding: 30px;">
                <div style="padding-bottom: 15px;">
                    <div>
                        <img id="profile" src="${obj.user.profilePic}" style="float: left; margin-right: 8px;">
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 20px;">${obj.user.username}<span><img src="/img/verified.png" style="width: 18px; margin-left: 6px;"></span></div>
                        <div style="color: #6f7b87;">${obj.user.handle}</div>
                    </div>
                </div>
                <div><p style="font-size: 32px;">${obj.text}</p></div>
                <hr>
                <div style="font-weight: 700;">
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-comment-dots"></i></span><span style="color: #6f7b87;">${obj.likes}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="fas fa-retweet"></i></span><span style="color: #6f7b87;">${obj.retweets}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-heart"></i></span><span style="color: #6f7b87;">${obj.replies}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-envelope"></i></span>
                    </span>
                </div>
            </div>
        `
        } else {
            return `
            <div class="card col-9 mx-auto mb-5 mt-5 shadow" style="padding: 30px;">
                <div style="padding-bottom: 15px;">
                    <div>
                        <img id="profile" src="${obj.user.profilePic}" style="float: left; margin-right: 8px;">
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 20px;">${obj.user.username}</div>
                        <div style="color: #6f7b87;">${obj.user.handle}</div>
                    </div>
                </div>
                <div><p style="font-size: 32px;">${obj.text}</p></div>
                <hr>
                <div style="font-weight: 700;">
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-comment-dots"></i></span><span style="color: #6f7b87;">${obj.likes}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="fas fa-retweet"></i></span><span style="color: #6f7b87;">${obj.retweets}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-heart"></i></span><span style="color: #6f7b87;">${obj.replies}</span>
                    </span>
                    <span style="margin-right: 20px;">
                        <span style="padding-right: 12px; color: #6f7b87;"><i class="far fa-envelope"></i></span>
                    </span>
                </div>
            </div>
        `
        }
        }
        finalArr = tweets.map(renderTweetsHtml).join('')
        return finalArr;
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}