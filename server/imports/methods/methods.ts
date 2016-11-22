import { Meteor } from 'meteor/meteor';
import { Chats } from '../../../both/collections/chats.collection';
import { Messages } from '../../../both/collections/messages.collection';
import { check, Match } from 'meteor/check';


const notEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  addMessage(chatId: string, content: string): void {
    const chatExists = !!Chats.collection.find(chatId).count()

    check(chatId, notEmptyString);
    check(content, notEmptyString);

    if(!chatExists) throw new Meteor.Error('chat-not-exists', 'Chat doesn\'t exist');

    Messages.collection.insert({
      chatId: chatId,
      content: content,
      createdAt: new Date()
    });

  }
})
