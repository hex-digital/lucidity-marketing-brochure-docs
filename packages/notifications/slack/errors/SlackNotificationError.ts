import { NotificationError } from '../../errors/NotificationError';

export class SlackNotificationError extends NotificationError {
  constructor(message: string) {
    super(message);
    this.name = 'SlackNotificationError';
  }
}
