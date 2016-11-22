import {Chats} from "../../../both/collections/chats.collection";
import {Messages} from "../../../both/collections/messages.collection";
import * as moment from "moment";

export class Main {
  start(): void {
    if (Chats.collection.find().count()) return;

        let chatId;

        chatId = Chats.collection.insert({
          title: 'Ethan Gonzalez',
          picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
        });

        Messages.collection.insert({
          chatId: chatId,
          content: 'You on your way?',
          createdAt: moment().subtract(1, 'hours').toDate()
        });

        chatId = Chats.collection.insert({
          title: 'Bryan Wallace',
          picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
        });

        Messages.collection.insert({
          chatId: chatId,
          content: 'Hey, it\'s me',
          createdAt: moment().subtract(2, 'hours').toDate()
        });

        chatId = Chats.collection.insert({
          title: 'Avery Stewart',
          picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
        });

        Messages.collection.insert({
          chatId: chatId,
          content: 'I should buy a boat',
          createdAt: moment().subtract(1, 'days').toDate()
        });

        chatId = Chats.collection.insert({
          title: 'Katie Peterson',
          picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
        });

        Messages.collection.insert({
          chatId: chatId,
          content: 'Look at my mukluks!',
          createdAt: moment().subtract(4, 'days').toDate()
        });

        chatId = Chats.collection.insert({
          title: 'Ray Edwards',
          picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
        });

        Messages.collection.insert({
          chatId: chatId,
          content: 'This is wicked good ice cream.',
          createdAt: moment().subtract(2, 'weeks').toDate()
        });
  }

}
