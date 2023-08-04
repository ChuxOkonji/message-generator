
let messages = {
    'healthInfo': ['Measure and Watch Your Weight', 'Limit Unhealthy Foods and Eat Healthy Meals', 
    'Take Multivitamin Supplements', 'Drink Water and Stay Hydrated, and Limit Sugared Beverages',
    'Exercise Regularly and Be Physically Active', 'Reduce Sitting and Screen Time', 'Get Enough Good Sleep', 'Go Easy on Alcohol and Stay Sober'], 

    'lifeHack': ['Store bedsheet inside the pillowcase', 'Use a teabag to get rid of smelly shoes', 'Use a wooden spoon to stop your pot from boiling over', 
    'Chew apple for fresh breath', 'Get rid of migraine with cold water', 'Spruce up wrinkled clothe with a flat iron', 
    'Make your shoe waterproof using beeswax', 'Unclog your drain using vinegar', 'Light a candle with a stick of spaghetti'],

    'cybersecTip': ['Use Effective Passwords and Change Them Regularly', 'Secure Wireless Networks', 'Install, Maintain and Apply Antivirus Programs', 
    'Install and Use a Firewall', 'Don\'t Open Emails or Attachments from Unknown Sources', 
    'Do Not Install Unnecessary Programs', 'Create Backups', 'Stay Current with Software Updates']
 }


 // Create a function that generate a random number 
 const generateRandomNumber = arr => Math.floor(Math.random() * arr.length)
 //console.log(generateRandomNumber(messages.healthInfo))


// Create a function that generates a random message from a given array
 const generateMessage = (objKey) => {
    return objKey[generateRandomNumber(objKey)]
 }
 //console.log(generateMessage(messages.cybersecTip))


 const generateMixMessages = () =>{
    console.log("I hope you takes these three advices seriously: ")
    console.log('')
    console.log(`For Improved Health You Should ${generateMessage(messages.healthInfo)}`)
    console.log(`I Bet You Never Heard To ${generateMessage(messages.lifeHack)}`)
    console.log(`Don't Get Screwed, ${generateMessage(messages.cybersecTip)}`)
 }

 generateMixMessages()