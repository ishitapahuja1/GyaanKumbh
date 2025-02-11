document.querySelectorAll('.ansadd').forEach(button => {
    button.addEventListener('click', function() {
        alert('Add an answer functionality will be added!');
    });
});

const openai = require('openai');

openai.Completion.create({
  model: 'gpt-3.5-turbo',
  prompt: 'Review this post for toxicity and appropriateness: "Insert user post here"',
  max_tokens: 100,
  temperature: 0.5,
}).then(response => {
  const moderation = response.choices[0].text;
  if (moderation.includes('toxic') || moderation.includes('spam')) {
    // Flag or reject post
  } else {
    // Post is approved
  }
});
if (moderation.includes('toxic')) {
    sendMessageToUser('Your post contains inappropriate language. Please revise your message.');
  } else {
    sendMessageToUser('Your post has been approved!');
  }
  