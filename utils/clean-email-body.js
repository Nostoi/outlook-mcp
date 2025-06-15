const EmailReplyParser = require('email-reply-parser');

function cleanEmailBody(content = '', contentType = 'text') {
  try {
    let text = content || '';
    if (contentType.toLowerCase() === 'html') {
      text = text.replace(/<[^>]*>/g, '');
    }
    const parsed = new EmailReplyParser().read(text);
    return parsed.getVisibleText().trim();
  } catch (err) {
    console.error('Error cleaning email body:', err.message);
    return content;
  }
}

module.exports = { cleanEmailBody };
