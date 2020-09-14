# Microsoft-Project-3-Web-Apps-APIs

<b>Description</b> 

My webapp gives you warnings about whether the news article you linked is fake news or clickbait. It makes sure that the news article is tested against multiple metrics giving you the most reliable news source - keeping you up to date on news that is real.

<b>Ideal customer</b> 

The target demographics is anyone who wants to check the validity of their news source. However, an ideal customer would be an elderly person who is technologically challenged, new to the internet and someone who wants to keep their family safe. 

<b>Persona's current situation/problem</b> 

As an example, there is an 86 year old person named Dave. Dave is technologically challenged, new to the internet and has children and grandchildren who he cares dearly about. After browsing online, Dave stumbles upon a number of news articles that may impact the health and safety of his family, but is not sure whether the news articles are real or not. By using the webapp that I have developed, Dave will be more confident in the news articles he has read and will be able to share it to my friends/family with no repercussions.

<b>Tech-Stack</b> 

The webapp front end is built using HTML, CSS and JavaScript. The front end is linked to the back end which is a Python Flask API that I built. The API is hosted on Google Cloud.

<b>App Functionality</b> 

The user first inputs the news article link and title and presses the Test button. The news article link and title are then sent to the API where it is processed. There are a number of metrics used to classify news as either being reliable or not:

1. The Python Flask API utilises Machine Learning to categorise headlines as either clickbait or not (clickbait_model.py).
2. Comparisons against a well-updated blacklist of known fake-news sites are made (blacklist_checker.py).

The webapp clasifies the news article as being reliable or not and displays the result on the webapp.

<b>Future scalability</b> 

I truly believe that there is a need for this webapp with plenty of opportunites to expand. Apart from finding more metrics to improve the classification of news articles as being reliable or not, there are opportunities to add more features such as providing better sourced articles on the same topic or implementing the webapp as a Google Chrome Extension or creating a Native App version. The Google Chrome Extension would be able to provide live warnings on Facebook, Twitter and Instagram and block out potentially misleading articles/news.

<b>How to run the project</b>

All the files used have been uploaded to this github. However, you can unzip the whole file named Microsoft.zip, open index.html on your local host and use it that way. For example, if you input the link as https://local.theonion.com/dog-could-really-go-for-some-women-s-underwear-right-no-1844421571?utm_campaign=The%20Onion&utm_content=1598736604&utm_medium=SocialMarketing&utm_source=facebook&fbclid=IwAR2BBAzSvedMoxJ8Tg7cIIPvKm2lnltjyK1zzXY3VkdGf-MJ9OIiKJ1cZEU and the title as "Dog Could Really Go For Some Women’s Underwear Right Now" and press Test, it should output "WARNING, unreliable source" given that the article is not reliable and should not be spread around.

