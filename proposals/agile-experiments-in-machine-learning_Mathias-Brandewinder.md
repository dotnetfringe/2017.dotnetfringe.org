# Agile experiments in Machine Learning

Just like traditional applications development, machine learning involves writing code. One aspect where the two differ is the workflow. While software development follows a fairly linear process (design, develop, and deploy a feature), machine learning is a different beast. You work on a single feature, which is never 100% complete. You constantly run experiments, and re-design your model in depth at a rapid pace. Traditional tests are entirely useless. Validating whether you are on the right track takes minutes, if not hours.

In this talk, we will take the example of a Machine Learning competition we recently participated in, the Kaggle Home Depot competition, to illustrate what "doing Machine Learning" looks like. We will explain the challenges we faced, and how we tackled them, setting up a harness in F# to easily create and run experiments, while keeping our sanity. We will also draw comparisons with traditional software development, and highlight how some ideas translate from one context to the other, adapted to different constraints.

# Me, why this talk, etc...

I am [@brandewinder on Twitter](https://twitter.com/brandewinder), and currently [blog here](http://brandewinder.com/). People usually introduce me as 'the F# guy'. I used to primarily use C#, but fell in love with F#, and haven't looked back since :)

I think what makes this talk interesting is:
* real-world example of F# on a real problem - not too big, but big enough that there is some meat to it,
* introduction to machine learning on a real problem that is fairly understandable,
* discussion around patterns and method, drawing lessons from writing code in a context that is slightly different from the typical 'business app'
