# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

A: React is a JS library solves the issue that DOM manipulation can be demanding for performance. It updates the DOM only if the state (data) changes,  For example: posting a new comment on facebook automatically adds a new comment box in the comment section. React is also not opinionated and can work with pure JS and other JS libraries.

1. What does it mean to think in react?

A: React works best when you think about the app as you are building it. You need to consider the state (what data you are recieving and where you are going to manpuliate that data) you are receiving while you build out components for your app.

1. Describe state.

A: State is data with the potential to change.  We can take advantage of a change in state to run conditional code in our components.

1. Describe props.

A: Props are data that is read-only or doesn't change.  Because of this it is easily passed into our components and reusable.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A: Side effects are anything that affect something outside the scope of the function being executed. You can sync effects via "useEffect" which runs whenever state changes.